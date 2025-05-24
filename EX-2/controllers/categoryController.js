import {categories, articles} from "../models/data.js";

const getCategories = (req, res) => {
    res.json(categories);
}
const getCategoryById = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(k => k.id === categoryId);
    if (!category){
        return res.status(404).json( { error: 'category not found' } );
    }
    res.json(category);
}
const createCategory = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    const newCategory ={
        id: categories.length + 1,
        name
    }
    categories.push(newCategory);
    res.status(201).json(newCategory);
}
const updateCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const { name } = req.body;
    const cate = categories.find(c => c.id === categoryId);
    if (!cate) return res.status(404).json({ error: 'Category not found' });
    if (name) cate.name = name;
    res.json(cate);
}
const deleteCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const index = categories.findIndex(c => c.id === categoryId);
    if (index === -1) return res.status(404).json({ error: 'Category not found' });
    categories.splice(index, 1);
    res.status(204).send();
}
const getArtByCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const article = articles.filter(c => c.categoryId === categoryId);
    if (article.length === 0) return res.status(404).json({ error: 'No Articles found'});
    res.json(article);
}

export {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    getArtByCategory,
}