import { Request, Response } from 'express';

type ReqQuery = {
    filename: string;
    width: string;
    height: string;
    format: string;
    blur: string;
    grayscale: string;
};

/**
 * example requests
 * @param request
 * @param response
 * @returns
 */
export const getImage = async (request: Request, response: Response): Promise<void> => {

};
