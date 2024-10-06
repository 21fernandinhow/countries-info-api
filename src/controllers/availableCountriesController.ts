import { Request, Response } from 'express';
import axios from 'axios';

export const getCountryList = async (req: Request, res: Response): Promise<void> => {
  await axios.get(`${process.env.DATENAGER_API_URL}/AvailableCountries`)
    .then(response => res.status(200).json(response.data))
    .catch(error => {
      console.error('Error fetching country list:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    });
};
