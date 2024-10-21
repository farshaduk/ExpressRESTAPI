
const Contact = require('../models/Contact');

exports.getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

exports.getContactById = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.json(contact);
};

exports.createContact = async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  res.json(newContact);
};

exports.updateContact = async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(contact);
};

exports.deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Contact deleted' });
};

exports.deleteAllContacts = async (req, res) => {
  await Contact.deleteMany();
  res.json({ message: 'All contacts deleted' });
};
