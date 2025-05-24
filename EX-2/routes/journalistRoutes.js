import express from 'express';
import { getJournalists, getJournalistById, createJournalist, updateJournalist, deleteJournalist, getArtByJournalist } from '../controllers/journalistController.js';

export const jourRouter = express.Router();

jourRouter.get('/', getJournalists);
jourRouter.get('/:id', getJournalistById);
jourRouter.post('/', createJournalist);
jourRouter.put('/:id', updateJournalist);
jourRouter.delete('/:id', deleteJournalist);
jourRouter.get('/:id/articles', getArtByJournalist);