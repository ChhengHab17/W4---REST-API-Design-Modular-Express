import { journalists, articles } from "../models/data.js";

const getJournalists = (req, res) => {
    res.json(journalists);
}
const getJournalistById = (req, res) => {
    const jourId = parseInt(req.params.id);
    const journalist = journalists.find(k => k.id === jourId);
    if (!journalist){
        return res.status(404).json( { error: 'Journalist not found' } );
    }
    res.json(journalist);
}
const createJournalist = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    const newJour ={
        id: journalists.length + 1,
        name,
        email
    }
    journalists.push(newJour);
    res.status(201).json(newJour);
}
const updateJournalist = (req, res) => {
    const jourId = parseInt(req.params.id);
    const { name, email } = req.body;
    const jour = journalists.find(j => j.id === jourId);
    if (!jour) return res.status(404).json({ error: 'Journalist not found' });
    if (name) jour.name = name;
    if (email) jour.email = email;
    res.json(jour);
}
const deleteJournalist = (req, res) => {
    const jourId = parseInt(req.params.id);
    const index = journalists.findIndex(j => j.id === jourId);
    if (index === -1) return res.status(404).json({ error: 'Journalist not found' });
    journalists.splice(index, 1);
    res.status(204).send();
}
const getArtByJournalist = (req, res) => {
    const jourId = parseInt(req.params.id);
    const article = articles.filter(a => a.journalistId === jourId);
    if (article.length === 0) return res.status(404).json({ error: 'No Articles found'});
    res.json(article);
}

export {
    getJournalists,
    getJournalistById,
    createJournalist,
    updateJournalist,
    deleteJournalist,
    getArtByJournalist,
}