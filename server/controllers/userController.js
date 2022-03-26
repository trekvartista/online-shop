const ApiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJWT = (id, email, role) => {
    return jwt.sign(
        {id: id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async register(req, res, next) {
        const {email, password, role} = req.body

        console.log(req.body)

        if (!email || !password) {
            return next(ApiError.badRequest('Incorrect email or password'))
        }

        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('The user with such email already exists'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashPassword, role})
        const basket = await Basket.create({userId: user.id})

        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
        
    }
    
    async login(req, res, next) {
        const {email, password} = req.body

        const user = await User.findOne({where: {email}})
        
        if (!user) {
            return next(ApiError.internal('User is not found'))
        }

        let comparedPassword = bcrypt.compareSync(password, user.password)

        if (!comparedPassword) {
            return next(ApiError.internal('Incorrect password'))
        }
        
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
    }

    async authCheck(req, res, next) {
        // const {id} = req.query

        // if (!id) {
        //     next(ApiError.badRequest('no ID was provided'))
        // }
        // res.json(id)

        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

}

module.exports = new UserController()