import express from 'express';
import dotenv from 'dotenv';

import jankariRoutes from './routes/jankariRoute.js';
import suchnaRoutes from './routes/suchnaRoute.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express Server! with nodemon');
});

app.get('/api/jankari', jankariRoutes);
app.get('/api/suchna', suchnaRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
