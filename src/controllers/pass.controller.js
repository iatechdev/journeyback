import {
    resetPass
}
from '../services/users/resetPass';

export async function resetPassword(req, res, next) {
    try {
        const {
            id
        } = req.body;

        const {
            password
        } = req.body;
        await update(id, password)
            .then(data => {
                res.json({
                    message: 'Updated pass successfully',
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