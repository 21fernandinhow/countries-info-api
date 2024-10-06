import { Request, Response } from 'express';
import axios from 'axios';

export const getCountryInfo = async (req: Request, res: Response): Promise<void> => {
    const { countryCode, countryName } = req.params;

    const borders = await axios.get(`${process.env.DATENAGER_API_URL}/CountryInfo/${countryCode}`)
        .then(response => response.data?.borders)
        .catch(error => {
            console.error('Error fetching border countries:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        });

    const populationData = await axios.post(`${process.env.COUNTRIES_NOW_API_URL}/population`, {country: countryName})
        .then(response => response.data.data.populationCounts)
        .catch(error => {
            console.error('Error fetching country population data:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        });

    const flagImageUrl = await axios.post(`${process.env.COUNTRIES_NOW_API_URL}/flag/images`, {iso2: countryCode})
    .then(response => response.data.data.flag)
    .catch(error => {
        console.error('Error fetching country flag:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    });

    const data = {
        country: countryName.charAt(0).toUpperCase() + countryName.slice(1),
        borders: borders,
        populationData: populationData,
        flag: flagImageUrl
    }

    res.status(200).json(data)
};
