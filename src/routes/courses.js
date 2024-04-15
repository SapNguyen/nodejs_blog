const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CourseController');

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.post('/handle-form-actions', coursesController.handleFormActions);
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);
router.delete('/:id', coursesController.destroy);
router.delete('/:id/force', coursesController.forceDestroy);
router.patch('/:id/restore', coursesController.restore);
router.get('/:slug', coursesController.show);

// router.get('/', newsController.index); //Cấp con nhỏ nhất của thằng /news

module.exports = router;
