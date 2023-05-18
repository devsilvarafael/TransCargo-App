import express from "express";

const routes = express();

routes.get('/', (req, res) => {
    res.send("Home")
})

routes.get('/login', (req, res) => {
    res.send("Login")
})

routes.get('/cadastro/usuario', (req, res) => {
    res.send("Cadastro usuario")
})

routes.get('/cadastro/caminhao', (req, res) => {
    res.send("Cadastro caminhao")
})

routes.get('/cadastro/cliente', (req, res) => {
    res.send("Cadastro cliente")
})

routes.get('/cadastro/cargas', (req, res) => {
    res.send("Cadastro cargas")
})

routes.get('/caminhoes', (req , res ) => {
    res.send("Caminhoes")
})



export default routes;