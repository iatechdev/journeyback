
import {
    getAll
} from '../services/aircrafts/getAll';

// trae un dato
import {
    getOne
} from '../services/aircrafts/getOne';

// crea un dato
import {
    create
} from '../services/aircrafts/create';


// update un dato
import {
    update
} from '../services/aircrafts/update';


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
            id_user
        } = req.body;
        getOne(id_user).then(data => {
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
            reference,
            id_user,
            status
        } = req.body;
        create(name, reference, id_user, status)
            .then(data => {
                res.status(200).json({
                    message: 'Created successfully',
                    data: data
                });
            })
            .catch(e => {
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

// actualizar usuario
export async function updateRegister(req, res, next) {
    try {
        const {
            id
        } = req.body;

        const {
            name,
            reference,
            id_user,
            status
        } = req.body;
        //const codeA = codeGenerate.generate(password);
        await update(id, name, reference, id_user, status)
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