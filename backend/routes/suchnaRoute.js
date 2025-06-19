import express from 'express';
import { getWeather } from '../controllers/dataController.js';

const router = express.Router();

// Define route
router.get('/suchitData', getWeather);

export default router;