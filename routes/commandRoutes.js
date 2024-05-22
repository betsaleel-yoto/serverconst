const express=require('express');
const router=express.Router();
const {ajouterCommande,getAllCommands,supprimerCommande}=require('../models/commandesModels')

router.get('/All',getAllCommands)

router.post('/Add',ajouterCommande)

router.delete('/delete/:id',supprimerCommande)


module.exports= router