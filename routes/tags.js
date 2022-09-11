import express from "express";
const router = express.Router();

import { getTags } from '../controller/articles_and_tags.js'

router.get('/:tagsName/:date', getTags);


export default router;