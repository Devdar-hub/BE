import mongoose from 'mongoose';

import User from './modules/user/user.model.js';
import dotenv from 'dotenv';

dotenv.config();


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

// Mock data
const users = [
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: '$2a$10$y8CGY3Wc3dMQLXxhUMk22.KBRzbKDqmUM3tNjOZVnMVWL2K6HemWG',
        // password: 'password123'
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: '$2a$10$RyMJiHAtq0b.ewzcut69o.sR1e/ukjnNrxQGxPCFtICcPSln3hYlS'
        // password: 'password456'
    }
];

// Insert mock data
const insertDocuments = async () => {
    try {
        await User.insertMany(users);
        console.log("Documents inserted!");
    } catch (error) {
        console.log(error);
    }
}

insertDocuments();
