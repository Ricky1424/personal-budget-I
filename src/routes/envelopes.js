// Require in express and extract the router object
const { Router } = require('express');

// Create an instance of the ROuter object and save to 'router'
const router = Router();

// Create an array to store the envelopes in
const envelopes = [];
let id = 0;

// Middleware that runs with every request
// router.use((req, res, next) => {
//     console.log("MIDDLEWARE RUNNING SUCCESFULLY");
//     next();
// });

// Function to check validity of new envelope
function newEnvelopeValidation(req, res, next) {
    console.log("Running envelope validation");
    // Store values of the required and supplied properties
    const requiredProperties = ['category', 'budgetAmount']
    const propOne = Object.keys(req.body)[0]
    const propTwo = Object.keys(req.body)[1]

    // Check to make sure supplied key matches required key
    if (propOne != requiredProperties[0] || propTwo != requiredProperties[1]) {
        console.log("Error: incorrect parameter")
        res.status(404).send("Incorrect Key Parameter")
    // Check to see if supplied value type matches required value type
    } else if (typeof(req.body[propOne]) != 'string' || typeof(req.body[propTwo]) != 'number') {
        console.log("Error: Incorrect value supplied")
        res.status(404).send("Incorrect Value Parameter")
    } else {
        next();
    };
};

// GET route that returns all envelopes
router.get('/', (req, res, next) => {
    console.log("Success");
    res.status(200).send(envelopes)
});

// POST route to create new envelopes
/*
This route is used to create a new evelope. Must be supplied in following format.
{
    "category": <string>,
    "budgetAmount": <int>
}
*/
router.post('/', newEnvelopeValidation, (req, res, next) => {
    id += 1;
    const newEnvelope = req.body;
    newEnvelope.id = id;
    envelopes.push(newEnvelope);
    console.log(`New category added to envelopes: ${newEnvelope.category}`)
    res.status(201).send("Envelope created");
});

// Export the routers
module.exports = router;


