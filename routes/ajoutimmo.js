const express=require('express');
const router=express.Router();
const {ajouterimmo,getAllimmo,supprimerimmo, modifierimmo}=require('../models/immo')
const upload=require('../uploadsImagesimmo')

router.get('/All',getAllimmo)

router.post('/Add',upload.single("photo"),ajouterimmo)

router.put('/edit/:id',modifierimmo)

router.delete('/delete/:id',supprimerimmo)

module.exports= router