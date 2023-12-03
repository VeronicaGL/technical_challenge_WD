const phonesData = require('../data/phones.json');

function getAllPhones(req, res, next) {
  try {
    setTimeout(() => {
      res.json(phonesData);
    }, 1000); 
  } catch (error) {
    console.error('Error al obtener todos los teléfonos', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

function getPhoneDetails(req, res, next) {
  const phoneId = req.params.id;
  const phoneDetails = phonesData.find(phone => phone.id === parseInt(phoneId));

  if (phoneDetails) {
    res.json(phoneDetails);
  } else {
    res.status(404).json({ error: 'Phone not found' });
  }
}

module.exports = {
  getAllPhones,
  getPhoneDetails
};