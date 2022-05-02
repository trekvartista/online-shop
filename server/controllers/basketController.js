const { Basket, BasketItem } = require("../models/models");
const ApiError = require("../error/apiError");

class BasketController {
    async addItem(req, res, next) {
        try {
            const { itemId, basketId } = req.body;
            const basketItem = await BasketItem.create({ itemId, basketId });

            return res.json(basketItem);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAllBasketItems(req, res) {
        
            const { basketId } = req.body;
            // console.log("=================================->", basketId);
            const basketItems = await BasketItem.findAndCountAll({
                where: { basketId },
            });

            return res.json(basketItems);

    }
}

module.exports = new BasketController();
