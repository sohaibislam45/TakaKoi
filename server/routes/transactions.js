const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Middleware to check if user is logged in
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ error: 'Unauthorized' });
};

router.get('/', isAuthenticated, async (req, res) => {
  const transactions = await Transaction.find({ user: req.user.id });
  res.json(transactions);
});

router.post('/', isAuthenticated, async (req, res) => {
  const transaction = new Transaction({ ...req.body, user: req.user.id });
  await transaction.save();
  res.status(201).json(transaction);
});

module.exports = router;
