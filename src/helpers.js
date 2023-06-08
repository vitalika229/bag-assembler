import { readFile, writeFile } from 'node:fs/promises';
import _ from 'lodash'; // eslint-disable-line

export const readFileAsync = async (filePath) => {
  const validFilePath = new URL(filePath, import.meta.url);
  const data = await readFile(validFilePath, { encoding: 'utf8' });
  return data;
};

export const writeFileAsync = async (filePath, data) => {
  const addr = new URL(filePath, import.meta.url);
  await writeFile(addr, data, { encoding: 'utf8' });
};
