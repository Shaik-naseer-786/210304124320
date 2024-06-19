const express = require('express');
const app = express();
const productsRoutes = require('./routes/productsRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api', productsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});