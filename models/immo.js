const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Add immo
async function ajouterimmo(req, res) {
    const { title, description, price } = req.body; // Renommé pour correspondre au modèle
    const photoPath = req.file.path;
  
    try {
        const nouvelleimmo = await prisma.immo.create({
            data: {
                photo: photoPath,
                title: title,
                description: description,
                price: price // Ajout du prix
            },
        });
        console.log('Immo ajoutée avec succès :', nouvelleimmo);
        res.status(200).json(nouvelleimmo);
    } catch (erreur) {
        console.error('Erreur lors de l\'ajout de l\'immo :', erreur);
        res.status(500).json({ erreur: erreur.message });
    } finally {
        await prisma.$disconnect();
    }
}

// Get all immo
async function getAllimmo(req, res) {
    try {
        const tousLesimmo = await prisma.immo.findMany();
        res.status(200).json(tousLesimmo);
    } catch (erreur) {
        console.error('Erreur lors de la récupération des immos :', erreur);
        res.status(500).json({ erreur: erreur.message });
    }
}

// Delete immo
async function supprimerimmo(req, res) {
    const { id } = req.params; // Identifiant passé en tant que paramètre dans l'URL
  
    try {
        const immoSupprimee = await prisma.immo.delete({
            where: {
                id: parseInt(id) // Conversion de l'ID
            }
        });
        console.log('Immo supprimée avec succès :', immoSupprimee);
        res.status(200).json(immoSupprimee);
    } catch (erreur) {
        console.error('Erreur lors de la suppression de l\'immo :', erreur);
        res.status(500).json({ erreur: erreur.message });
    }
}

// Update immo
async function modifierimmo(req, res) {
    const { id } = req.params; // Identifiant passé en tant que paramètre dans l'URL
    const { photo, title, description, price } = req.body; // Mise à jour des champs

    try {
        const immoModifiee = await prisma.immo.update({
            where: {
                id: parseInt(id) // Conversion de l'ID
            },
            data: {
                photo: photo,
                title: title,
                description: description,
                price: price // Mise à jour du prix
            }
        });
        console.log('Immo modifiée avec succès :', immoModifiee);
        res.status(200).json(immoModifiee);
    } catch (erreur) {
        console.error('Erreur lors de la modification de l\'immo :', erreur);
        res.status(500).json({ erreur: erreur.message });
    }
}

module.exports = { ajouterimmo, getAllimmo, supprimerimmo, modifierimmo };
