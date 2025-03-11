import express from 'express';
import mongoose from 'mongoose';
import bookRouter from './routes/library-routes.js';


//database connection
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

// Call the function to connect to the database
connectToDatabase();


// app creation
const app = express();

app.use(express.json());

app.use('/api/v1', bookRouter);

app.listen(4100, () => {
    console.log('Server is listening on port 4100');
})