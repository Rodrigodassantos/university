const express = require("express")
const router = express.Router()
const universityController = require('../controller/universityController')


router.get('/populate', universityController.populateDataBase);

router.get('/universities', universityController.getUniversity);

router.post('/universities', universityController.createUniversity)

router.put('/universities/:id', universityController.updateUniversity);

router.get('/universities/:id',  universityController.getSingleUniversity);

router.delete('/universities/:id', universityController.deleteUniversity);    

module.exports = router;