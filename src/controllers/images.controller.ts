import path from 'path';
import { Request, Response } from 'express';
import { transformImage } from '../services/image';

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
    try {
        if (request.query) {
            const { filename, width, height, format } = request.query as ReqQuery;
            response.sendFile(path.resolve(await transformImage(filename, width, height, format)));
        }
    } catch (err) {
        response.status(400).send(`Failed to process ${request.originalUrl} because ${(err as Error).message}`);
    }
};
