import path from 'path';
import sharp from 'sharp';
import fs from 'fs-extra';
import { createDirIfNotExist } from '../Helpers/index';

export const transformImage = async (
  filename: string,
  width: string,
  height: string,
  format = 'jpg',
  blur = 'false',
  grayscale = 'false'
): Promise<string> => {
  if (!filename) throw new Error('filename is required.');
  if (!height) throw new Error('height is required.');
  if (!width) throw new Error('widthis required.');

  if (isNaN(Number(width)) || isNaN(Number(height)))
    throw new Error(
      'Invalid width or height. Width or height must be a number.'
    );

  const fullPath = path.resolve(`./images/${filename}.${format}`);
  const thumbPath = path.resolve(
    `./images/thumb/${filename}_${width}x${height}.${format}`
  );

  if (!(await fs.pathExists(fullPath)))
    throw new Error(`${fullPath} doesn't exist on disk.`);

  createDirIfNotExist('./images/thumb/');

  if (await fs.pathExists(thumbPath)) {
    const metadata = await sharp(thumbPath).metadata();

    if (
      metadata &&
      width &&
      height &&
      metadata.width === +width &&
      metadata.height === +height
    ) {
      return thumbPath;
    }
  }

  let transform = await sharp(fullPath).resize(+width, +height);

  if (blur) transform = await transform.blur();

  if (grayscale) transform = await transform.grayscale();

  await transform.toFile(thumbPath);

  return thumbPath;
};
