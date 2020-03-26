import {
    getAll
} from '../services/msgs/getAll';

// trae un dato
import {
    getOne
} from '../services/msgs/getOne';

// crea un dato
import {
    create
} from '../services/msgs/create';




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
            id_aircraft
        } = req.body;
        getOne(id_aircraft).then(data => {
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
            msg, id_user, id_aircraft
        } = req.body;
        create(msg, id_user, id_aircraft)
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
