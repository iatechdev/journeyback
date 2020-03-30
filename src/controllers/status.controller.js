import {
    getAll
} from '../services/status/getAll';
import {
    create
}
from '../services/status/create';
import {
    update
}
from '../services/status/update';

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

export async function createRegister(req, res, next) {
    try {
        const {
            name
        } = req.body;
        create(name)
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
export async function updateRegister(req, res, next) {
    try {
        const {
            id
        } = req.body;

        const {
            name
        } = req.body;
        //const codeA = codeGenerate.generate(password);
        await update(id, name)
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