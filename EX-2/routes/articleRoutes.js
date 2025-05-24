import express from 'express';
import { getArticles, getArticleById, createArticle, updateArticle, deleteArticle } from '../controllers/articleController.js';

export const artRouter = express.Router();

artRouter.get('/', getArticles);
artRouter.get('/:id', getArticleById);
artRouter.post('/', createArticle);
artRouter.put('/:id', updateArticle);
artRouter.delete('/:id', deleteArticle);