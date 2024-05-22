const express=require('express');
const router=express.Router();
const {ajouterRealisation,getAllrealisations,supprimerRealisation, modifierRealisation}=require('../models/realisationModels')
const upload=require('../uploadsImages')

router.get('/All',getAllrealisations,)

router.post('/Add',upload.single("photo"),ajouterRealisation)

router.put('/edit',modifierRealisation)

router.delete('/delete',supprimerRealisation)

module.exports= router