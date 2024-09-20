const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Add blogs
async function ajouterblogs(req, res) {
    const { title, content } = req.body; // Renommé pour correspondre au modèle
    const photoPath = req.file.path;
    const date = new Date().toISOString(); // Ajout de la date actuelle
  
    try {
        const nouvelleblogs = await prisma.blogs.create({
            data: {
                photo: photoPath,
                date: date,
                title: title,
                content: content
            },
        });
        console.log('Blog ajouté avec succès :', nouvelleblogs);
        res.status(200).json(nouvelleblogs);
    } catch (erreur) {
        console.error('Erreur lors de l\'ajout du blog :', erreur);
        res.status(500).json({ erreur: erreur.message });
    } finally {
        await prisma.$disconnect();
    }
}

// Get all blogs
async function getAllblogs(req, res) {
    try {
        const tousLesblogs = await prisma.blogs.findMany();
        res.status(200).json(tousLesblogs);
    } catch (erreur) {
        console.error('Erreur lors de la récupération des blogs :', erreur);
        res.status(500).json({ erreur: erreur.message });
    }
}

// Delete blog
async function supprimerblogs(req, res) {
    const { id } = req.params; // Identifiant passé en tant que paramètre dans l'URL
  
    try {
        const blogsSupprimee = await prisma.blogs.delete({
            where: {
                id: parseInt(id) // Conversion de l'ID
            }
        });
        console.log('Blog supprimé avec succès :', blogsSupprimee);
        res.status(200).json(blogsSupprimee);
    } catch (erreur) {
        console.error('Erreur lors de la suppression du blog :', erreur);
        res.status(500).json({ erreur: erreur.message });
    }
}

// Update blog
async function modifierblogs(req, res) {
    const { id } = req.params; // Identifiant passé en tant que paramètre dans l'URL
    const { photo, title, content } = req.body;

    try {
        const blogsModifiee = await prisma.blogs.update({
            where: {
                id: parseInt(id) // Conversion de l'ID
            },
            data: {
                photo: photo,
                title: title,
                content: content
            }
        });
        console.log('Blog modifié avec succès :', blogsModifiee);
        res.status(200).json(blogsModifiee);
    } catch (erreur) {
        console.error('Erreur lors de la modification du blog :', erreur);
        res.status(500).json({ erreur: erreur.message });
    }
}

module.exports = { ajouterblogs, getAllblogs, supprimerblogs, modifierblogs };
