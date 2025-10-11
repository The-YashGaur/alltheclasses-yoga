// Load environment variables (only in development)
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

// Verify required environment variables
const requiredEnvVars = ['MONGODB_URI'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error(`❌ Missing required environment variables: ${missingVars.join(', ')}`);
  process.exit(1);
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    env: process.env.NODE_ENV || 'development',
    db: process.env.MONGODB_URI ? 'configured' : 'not configured'
  });
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
.then(() => console.log('✅ Successfully connected to MongoDB'))
.catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
  process.exit(1);
});

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Yoga Institute API',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  server.close(() => process.exit(1));
});
