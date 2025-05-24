import express from 'express';
import { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory, getArtByCategory } from '../controllers/categoryController.js';

export const cateRouter = express.Router();

cateRouter.get('/', getCategories);
cateRouter.get('/:id', getCategoryById);
cateRouter.post('/', createCategory);
cateRouter.put('/:id', updateCategory);
cateRouter.delete('/:id', deleteCategory);
cateRouter.get('/:id/articles', getArtByCategory);