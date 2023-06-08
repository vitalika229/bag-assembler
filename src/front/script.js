import algorithm from '../draftAlgorithm.js';
import { readFileAsync } from '../helpers.js';

const constContent = await readFileAsync('../database/users/personalization.json');
const content = await readFileAsync('../database/users/user.json');

const bag = algorithm(constContent, content);

const textNode = document.createTextNode(bag.join(', '));
const p = document.createElement('p');

p.append(textNode);
