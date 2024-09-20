const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require('body-parser');
const immo = require('./routes/ajoutimmo');
const blogs = require('./routes/ajoutBlogs');
const cors = require('cors');

const allowedOrigins = ['https://mon-portefolio-245f.vercel.app', 'http://localhost:5173'];

app.use(cors({
  origin: (origin, callback) => {
    // Check if the origin is in the allowed origins array
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));







app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'uploadsblog')));
app.use(express.static(path.join(__dirname, 'uploadsimmo')));
app.use('/blogs', immo);
app.use('/immo', blogs);

app.listen(port, () => {
  console.log('Le serveur a démarré avec succès au port ' + port);
});
