import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const removeLast = await readContacts();
  removeLast.pop();

  await writeContacts(removeLast);
};

removeLastContact();
