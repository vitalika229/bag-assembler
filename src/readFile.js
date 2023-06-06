import { readFile } from 'node:fs/promises';

export default async () => {
  const filePath = new URL('./user.json', import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
};
