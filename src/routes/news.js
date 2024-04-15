const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show);
router.get('/', newsController.index); //Cấp con nhỏ nhất của thằng /news

module.exports = router;
