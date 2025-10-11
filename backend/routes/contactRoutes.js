const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    // Create new contact
    const newContact = new Contact({
      name,
      email,
      phone: phone || '',
      interest: interest || '',
      message
    });

    // Save to database
    await newContact.save();

    res.status(201).json({ 
      success: true, 
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: newContact
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.'
    });
  }
});

// @route   GET api/contact
// @desc    Get all contact submissions (for admin)
// @access  Private (you should add authentication middleware)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
