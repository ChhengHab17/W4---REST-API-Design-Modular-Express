import express from 'express';
import { articles } from './models/data.js';
import { artRouter } from './routes/articleRoutes.js';
import { cateRouter } from './routes/categoryRoutes.js';
import { jourRouter } from './routes/journalistRoutes.js';

const app = express();

const PORT = 3000;

// app.get('/', (req, res) => {
//     res.json(articles)
// });

app.use(express.json());
app.use('/articles', artRouter);
app.use('/journalists', jourRouter);
app.use('/categories', cateRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});