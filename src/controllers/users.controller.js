// en esta parte importamos los medotos que vamos a utilizar y estan separados 
// de acuerdo a su funcion
// se encuentran ubicados en la carpeta service/nombre_modulos/funcion

// genera hast  de acuerdo al texto que se le envia en sha 256
import codeGenerate from '../services/users/codegenerate';

// valida que un campo sea unico
import {
    unique
} from '../services/users/unique';

// trae todos los datos
import {
    getAll
} from '../services/users/getAll';

// trae un dato
import {
    getOne
} from '../services/users/getOne';

// crea un dato
import {
    create
} from '../services/users/create';


// update un dato
import {
    update
} from '../services/users/update';

// login

import loginUser from '../services/users/login'


export function getAllData(req, res, next) {
    try {
        getAll().then(data => {
            res.status(200).json({
                message: 'All data',
                data: data
            });
        }).catch(e => {
            console.log(e);
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
};

// retorna un solo usuario
export function getOneData(req, res, next) {
    try {
        const {
            id
        } = req.body;
        getOne(id).then(data => {
            res.status(200).json({
                message: 'One row',
                data: data
            });
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}


// crear usuario
export async function createRegister(req, res, next) {
    try {
        const {
            name,
            last_name,
            email,
            password,
            id_dep,
            id_level,
            img
        } = req.body;
        unique(email).then(data => {

            if (!data) {
                //  const codeA = codeGenerate.generate(password);
                create(name, last_name, email, password, id_dep, id_level, img)
                    .then(data => {
                        res.status(200).json({
                            message: 'Created successfully',
                            data: data
                        });
                    })
                    .catch(e => {
                        console.log(e);
                    });
            } else {
                res.status(401).json({
                    message: 'user alredy exists',
                    data: {},
                    error: true
                });
            }

        }).catch(e => {
            res.status(500).json({
                message: 'Something goes 2 wrong',
                data: {},
                error: true
            });
        });

    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}



export async function updateRegister(req, res, next) {
    try {
        const {
            id
        } = req.body;

        const {
            name,
            last_name,
            email,
            id_dep,
            id_level,
             img
        } = req.body;         
        await update(id, name, last_name, email, id_dep, id_level, img, req.files)
            .then(data => {
                res.json({
                    message: 'Updated successfully',
                    data: data
                });
            }).catch(e => {
                console.log(e);
            });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}

export async function login(req, res, next) {
    try {
        const {
            username,
            password
        } = req.body;
        await loginUser.login(username, password)
            .then(data => {
                if (data.success)
                    res.status(200).json({
                        data: data
                    });
                else
                    res.status(401).json({
                        message: data.message,
                        token: false
                    });
            }).catch(e => {
                console.log('error', e);
            });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}


