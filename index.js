import express from 'express';
import bodyParser from 'body-parser';

import articlesRoutes from './routes/articles.js';
import tagsRoutes from './routes/tags.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/articles', articlesRoutes);
app.use('/tags', tagsRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Home Page');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))