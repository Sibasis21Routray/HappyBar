
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



console.log('EMAIL_USER after load:', process.env.EMAIL_USER);
console.log('EMAIL_PASSWORD after load:', process.env.EMAIL_PASSWORD);

import express, { Request, Response } from 'express';
import cors from 'cors';

import { sendEmail } from './controllers/emailController.js';



const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello, TypeScript + Express!' });
});

// Email route
app.post('/api/contact', sendEmail);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});