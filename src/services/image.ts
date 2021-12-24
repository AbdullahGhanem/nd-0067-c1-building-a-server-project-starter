import path from 'path';

export const transformImage = async (
    filename: string,
    width: string,
    height: string,
    format = 'jpg',
): Promise<string> => {

    if (!filename) throw new Error('filename is required.');
    if (!height) throw new Error('height is required.');
    if (!width) throw new Error('widthis required.');

    if (isNaN(Number(width)) || isNaN(Number(height)))
        throw new Error('Invalid width or height. Width or height must be a number.');
    const thumbPath = path.resolve(`./images/thumb/${filename}_${width}x${height}.${format}`);
    return thumbPath;
}
