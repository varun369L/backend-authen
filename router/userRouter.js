const express = require('express');
const { registerUser, loginUser, getProfile } = require('../controllers/usercontroller');
const protect = require('../middleware/authmiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);

module.exports = router;