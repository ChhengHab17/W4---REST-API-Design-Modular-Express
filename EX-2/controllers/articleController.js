import { articles } from "../models/data.js";

const getArticles = ( req, res) => {
    res.json(articles);
}
const getArticleById = (req, res) => {
    const articleId = parseInt(req.params.id);
    const article = articles.find(a => a.id === articleId);
    if (!article){
        return res.status(404).json({error: 'Article not found'});
    }
    res.json(article);
}
const createArticle = (req, res) =>{
    const {title, content, journalistId, categoryId} = req.body;
    if(!title || !content || !journalistId || !categoryId){
        return res.status(400).json({error: 'Title, content, journalistId and categoryId are required'});
    }
    const newArticle = {
        id: articles.length + 1,
        title,
        content,
        journalistId,
        categoryId
    }
    articles.push(newArticle);
    res.status(201).json(newArticle);
}
const updateArticle = (req, res) => {
    const articleId = parseInt(req.params.id);
    const {title, content, journalistId, categoryId} = req.body;
    const article = articles.find(a => a.id === articleId);
    if (!article){
        return res.status(404).json({error: 'Article not found'});
    }
    if (title) article.title = title;
    if (content) article.content = content;
    if (journalistId) article.journalistId = journalistId;
    if (categoryId) article.categoryId = categoryId;

    res.status(200).json(article);
}
const deleteArticle = (req, res) => {
    const articleId = parseInt(req.params.id);
    const find = articles.findIndex(a => a.id === articleId);
    if (find === -1) return res.status(404).json({ error: 'Article not found' });
    articles.splice(find, 1);
    res.status(204).send();
}
export {
    getArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
}