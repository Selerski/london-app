const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getBoroughs);
router.get('/result', controller.getBoroughs);

module.exports = router;