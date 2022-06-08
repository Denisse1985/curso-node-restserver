
const{ Response, response } = require('express');


const usuariosGet = (req, res = response) =>{

    const {q, nombre = 'no name', apikey, page= 1, limit} = req.query;

    res.json({
        msg: 'get api - controlador',
        query,
        nombre,
        apikey,
        page,
        limit
    });
}
const usuariosPut = (req, res = response) =>{

    const id = req.params.id;

    res.json({
        msg: 'put api - controlador',
        id
    });                                  
}
const usuariosPost = (req, res = response) =>{

    //const body = req.body;//trae todo lo que viene en el body
    const {nombre, edad} = req.body;//solo trae lo solicitado
    res.json({
        msg: 'post api - controlador',
        nombre, edad
    });
}
const usuariosDelete = (req, res = response) =>{
    res.json({
        msg: 'delete api - controlador'
    });
}
const usuariosPatch = (req, res = response ) =>{
    res.json({
        msg: 'patch api - controlador'
    });
}


module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
}