const { Basket, BasketItem } = require('../models/models')
const ApiError = require('../error/apiError')

class BasketController {

    async addItem(req, res) {

        const {id} = req.params
        const basketItem = await BasketItem.create({id})

        return res.json(basketItem)
    }
    
    async getAllBasketItems(req, res) {

        let basketItems;
        
        basketItems = await BasketItem.findAndCountAll()
        
        return res.json(basketItems)
    }

}

module.exports = new BasketController()