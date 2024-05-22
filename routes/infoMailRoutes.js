const express=require('express');
const router=express.Router();
const {nouvelinfo,getAllinfo,supprimerInfo}=require('../models/infoMail-models')

router.get('/All',getAllinfo)

router.post('/Add',nouvelinfo)


router.delete('/delete/:id',supprimerInfo)


module.exports= router