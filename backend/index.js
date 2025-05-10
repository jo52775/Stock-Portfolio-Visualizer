const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

// Testing Endpoint (GET)
app.get('/api/user-profile', (req, res) => {
    const tempResponse = {
        'id': '001',
        'username': 'josh2002',
        'password': '123',
        'firstName': 'Josh',
        'lastName': 'Naraine',
        'preferenceList': ['AAPL','GOOGLE','ROGERS']
    }
    res.send(tempResponse);
});

app.listen(PORT, () => {
    console.log('Server is listening on Port:', PORT);
});
