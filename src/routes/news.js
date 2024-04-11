const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);
router.use('/', newsController.index); //Cấp con nhỏ nhất của thằng /news

module.exports = router;
