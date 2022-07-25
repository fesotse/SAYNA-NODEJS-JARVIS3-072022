const { time } = require('console')
const express = require('express')
const { uptime } = require('process')
const app = express()

const port = 3000
app.listen(port, ()=>{
    console.log("It's work!!! \n Your are AWSOME")
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
app.get("/home", (req,res)=>{
    res.sendFile(__dirname + '/home.html')
})
app.get("/inscription", (req,res)=>{
    res.sendFile(__dirname + '/inscription.html')
})
app.get("/help", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

// action après l'inscription d'un utilisateur
app.post("/post", (req,res)=>{
    const id = req.params.id
    const utilisateur= utilisateurs.find(utilisateur=> utilisateur.id == id)
    res.send("Bienvenue " +utilisateur.lastname)
})