const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return data;
};

const getContactById = (contactId) => {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
};

const removeContact = (contactId) => {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
};

const addContact = (name, email, phone) => {
  // ...твій код. Повертає об'єкт доданого контакту.
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
