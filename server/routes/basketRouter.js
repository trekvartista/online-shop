const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/', basketController.addItem)
router.delete('/', basketController.removeItem)
router.put('/', basketController.getAllBasketItems)

module.exports = router