import express from 'express';
import { logger } from './middleware/logger.js';
import {router} from './routes/userRoutes.js';
import { bodyValidate } from './middleware/bodyValidate.js';



const app = express();
app.use(express.json());


app.use(logger);
app.use(bodyValidate);
app.use('/users', router);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
