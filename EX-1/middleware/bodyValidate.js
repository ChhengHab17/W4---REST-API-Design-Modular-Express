export const bodyValidate = (req, res, next) => {
    if(req.method === 'POST' || req.method === 'PUT'){
        const {name, email} = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }
    }
    next();
}