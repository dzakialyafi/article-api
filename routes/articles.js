import express from "express";

import { getArticles, postArticle, getArticle } from '../controller/articles_and_tags.js';

const router = express.Router();

router.get('/', getArticles);

router.post('/', postArticle);

router.get('/:id', getArticle);

export default router;