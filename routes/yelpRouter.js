const express = require('express');
const Yelp = require('../scraping/yelp');

const router = express.Router();


// Define a route for testing the Yelp function
router.get('/', async (req, res) => {
    try {
        // Call the Yelp function from the scraping/yelp.js file
        const result = await Yelp();

        // Return the result as a response
        res.json(result);
    } catch (error) {
        // Handle any errors that occur during the Yelp function call
        res.status(500).json({ error: 'An error occurred while testing the Yelp function' });
    }
});

module.exports = router;