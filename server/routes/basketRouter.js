const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/:id', basketController.addItem)
router.get('/', basketController.getAllBasketItems)

module.exports = router