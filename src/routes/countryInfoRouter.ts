import { Router } from 'express';
import { getCountryInfo } from '../controllers/countryInfoController';

const countryInfoRouter = Router();

countryInfoRouter.get('/:countryCode&:countryName', getCountryInfo);

export default countryInfoRouter;
