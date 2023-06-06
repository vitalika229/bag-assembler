import { writeFile } from 'node:fs/promises';

export default async (filePath, data) => {
  const addr = new URL(filePath, import.meta.url);
  await writeFile(addr, data, { encoding: 'utf8' });
};
