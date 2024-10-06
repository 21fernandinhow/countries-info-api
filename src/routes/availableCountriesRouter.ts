import { Router } from 'express';
import { getCountryList } from '../controllers/availableCountriesController';

const availableCountriesRouter = Router();

availableCountriesRouter.get('/', getCountryList);

export default availableCountriesRouter;
