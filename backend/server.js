const express = require('express');
const app = express();
const itemRoutes = require('./routes/itemRoutes');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

app.use(express.json());
app.use('/api/items', itemRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
