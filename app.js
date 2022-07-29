//importation des fichiers et modules à utiliser
const express = require('express'), app = express(), port = 3000, connection = require('./db_mysql');
var bodyParser = require('body-parser')
require('dotenv').config()
console.log('ENV',process.env)
//pour les fichiers statics
app.use("/public",express.static('dossier'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

//ecoute du port
app.listen(port, ()=>{
    console.log("It's work!!! \n port connected")
})

//connection à la base de donnée
connection.connect((err)=>{
    if(err){
        throw err;
    }console.log("Mysql connected successfully");
})
app.get("/home", (req,res)=>{
    res.sendFile(__dirname + '/home.html')
})
app.get("/register", (req,res)=>{
    res.sendFile(__dirname + '/inscription.html')
})
app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get("/login", (req,res)=>{
    res.sendFile(__dirname + '/connexion.html')
})
app.post("/registred",(req,res)=>{
    let 
})



//parseInt (fonction permettant de changer un chiffre en chaine de caractère


//send to the file index     let utilisateurs = require('./utilisateur')
// app.listen(port, ()=>console.log("le serveur est sur la page principale"))
// app.route('/utilisateur/:id')
// .get((req,res)=>{
//     const id = req.params.id
//     const utilisateur= utilisateurs.find(utilisateur=> utilisateur.id == id)
//     res.send("Bienvenue " +utilisateur.nom)
//     })
//     .post((req,res)=>{
//         res.send("article post")
//     })
//     .put((req,res)=>{
//         res.send('article put')
//     })
// app.get("/home", (req,res)=>{
//     res.sendFile(__dirname, '/index.html')
// })
// action après l'inscription d'un utilisateur
// app.post("/post", (req,res)=>{
//     const id = req.params.id
//     const utilisateur= utilisateurs.find(utilisateur=> utilisateur.id == id)
//     res.send("Bienvenue " +utilisateur.lastname)
// })