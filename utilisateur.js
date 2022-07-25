// const utilisateurs=[
//  {
//     id:1,
//     nom:"Mike",
//     prenom: "Salim"
// },
// {
//     id:2,
//     nom:"Christian",
//     prenom:'Soloam'
// },
// {
//     id:3,
//     nom:'Shalim',
//     prenom:'Shito'
// },
// {
//     id:4,
//     nom:"Namikaze",
//     prenom:'Minato'
// },
// {
//     id:5,
//     nom:'Uzumaki',
//     prenom:'Kushina'
// }

// ];

//creation d'objet utilisateur
let user ={
    id,
    firstname,
    lastname,
    email,
    password,
    date_naissance,
    token,
    role,
    sexe,
    creatAt
}
function User(id,firstname, lastname, email, password, date_naissance, token, role, sexe, creatAt){
    return {
        id:id,
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password,
        date_naissance:date_naissance,
        token:token,
        role:role,
        sexe:sexe,
        creatAt:creatAt
    }
}
function Piece(id,name, cover, creatAt){
        this.id=id,
        this.name = name,
        this.cover = cover,
        this.creatAt = creatAt
}


module.exports = utilisateurs