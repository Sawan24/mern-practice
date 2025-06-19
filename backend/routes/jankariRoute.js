import express from 'express';
import { getWeather } from '../controllers/dataController.js';

const router = express.Router();

// Define route
router.get('/data', getWeather);

export default router;
