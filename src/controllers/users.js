import bcrypt from 'bcrypt';
import { newUser } from '../models/user.js';

const showUserRegistrationForm = (req, res) => {
    res.render('register', { title: 'Register' });
};

const processUserRegistrationForm = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        req.flash('success', 'Registration successful, please log in.');
        res.redirect('/');
    } catch (error) {
        console.error('Error registering user:', error);
        req.flash('error', 'An error has occurred during Registration. Please try again');
        res.redirect('/register');
    }
};

export { showUserRegistrationForm, processUserRegistrationForm };