import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  const pushContacts = await readContacts();

  for (let i = 0; i < number; i++) {
    pushContacts.push(createFakeContact());
  }

  await writeContacts(pushContacts);
};

generateContacts(5);
