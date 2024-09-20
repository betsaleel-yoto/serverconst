const express=require('express');
const router=express.Router();
const {ajouterblogs,getAllblogs,supprimerblogs, modifierblogs}=require('../models/blogs.js')
const upload=require('../uploadsImagesblog')

router.get('/All',getAllblogs)

router.post('/Add',upload.single("photo"),ajouterblogs)

router.put('/edit/:id',modifierblogs)

router.delete('/delete/:id',supprimerblogs)

module.exports= router