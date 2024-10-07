import { Request, Response } from 'express';
import axios from 'axios';

export const getCountryList = async (req: Request, res: Response): Promise<void> => {
  await axios.get('https://date.nager.at/api/v3/AvailableCountries')
    .then(response => res.status(200).json(response.data))
    .catch(error => {
      console.error('Error fetching country list:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    });
};

