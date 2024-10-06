import express, { Application } from 'express';
import cors from 'cors';
import availableCountriesRouter from './routes/availableCountriesRouter';
import dotenv from 'dotenv'; 
import countryInfoRouter from './routes/countryInfoRouter';

dotenv.config(); 

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/availableCountries', availableCountriesRouter); 
app.use('/api/countryInfo', countryInfoRouter); 

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
