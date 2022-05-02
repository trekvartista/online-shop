const { Item, ItemInfo } = require('../models/models')
const ApiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')

class ItemController {
    async create(req, res, next) {
        try {

            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            
            let fileName = uuid.v4() + '.jpg'
            //     path to current folder, ../, folder name, file name
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            
            const item = await Item.create({name, price, brandId, typeId, info, img: fileName})
            
            if (info) {
                info = JSON.parse(info)
                info.forEach(i => 
                    ItemInfo.create({
                        title: i.title,
                        description: i.description,
                        itemId: item.id
                    })
                )
            }
            
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    
    async getAll(req, res) {

        // once again when destructuring objects, names MUST BE the same!
        let {typeId, brandId, limit, page} = req.query

        // console.log('=================-=======================+', req.query)
        page = page || 1
        limit = limit || 9

        let offset = page * limit - limit

        let items;

        if (!brandId && !typeId) {
            items = await Item.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            //                          search by fileds
            items = await Item.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            items = await Item.findAndCountAll({where: {typeId},  limit, offset})
        }
        if (brandId && typeId) {
            items = await Item.findAndCountAll({where: {brandId, typeId}, limit, offset})
        }

        return res.json(items)

    }

    async getById(req, res) {
        const {id} = req.params
        const item = await Item.findOne(
            {
                where: { id },
                include: [{model: ItemInfo, as: "info"}]
            }
        )

        return res.json(item)
    }

}

module.exports = new ItemController()