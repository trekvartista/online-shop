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
        let {brandID, typeID, limit, page} = req.query
        console.log(req.query)
        page = page || 1
        limit = limit || 10

        let offset = page * limit - limit

        let items;

        if (!brandID && !typeID) {
            items = await Item.findAndCountAll({limit, offset})
        }
        if (brandID && !typeID) {
            //                          search by fileds
            items = await Item.findAndCountAll({where: {brandID}, limit, offset})
        }
        if (!brandID && typeID) {
            items = await Item.findAndCountAll({where: {typeID},  limit, offset})
        }
        if (brandID && typeID) {
            items = await Item.findAndCountAll({where: {brandID, typeID}, limit, offset})
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