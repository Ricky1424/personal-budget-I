// Require in express and extract the router object
const { Router } = require('express');

// Create an instance of the Router object and save to 'router'
const router = Router();

// Create an array to store the envelopes in
const envelopes = [];
let id = 0;


// Middleware to find the index of an envelope given a name 
router.param('envelopeName', (req, res, next, name) => {
    const lowerCaseName = name.toLowerCase();
    if (!isNaN(lowerCaseName)) {
        res.status(400).send("Please enter an envelope name as a string")
    }
    const envelopeIndex = envelopes.findIndex(envelope => envelope.category === lowerCaseName);
    if (envelopeIndex < 0) {
        res.status(404).send("Envelope does not exist");
    }
    req.envelopeIndex = envelopeIndex;
    next();
})


// Middleware to find the index of the toEnvelopeName
router.param('toEnvelopeName', (req, res, next, toName) => {
    const lowerCaseToName = toName;
    if(!isNaN(lowerCaseToName)) {
        res.status(400).send("Please enter destination envelope name as a string")
    }
    const toEnvelopeIndex = envelopes.findIndex(envelope => envelope.category === lowerCaseToName);
    if (toEnvelopeIndex < 0) {
        res.status(404).send("Destination envelope does not exist")
    }
    req.toEnvelopeIndex = toEnvelopeIndex;
    next();
})


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
    console.log("Successfully retrieved all envelopes");
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

// GET route which return a single envelope by named request
router.get('/:envelopeName', (req, res, next) => {
    res.status(200).send(envelopes[req.envelopeIndex])
});

// PUT route which allows the subtracting of funds from an envelope
router.put('/:envelopeName/:subtractAmount', (req, res, next) => {
    const { subtractAmount } = req.params;
    if (subtractAmount > envelopes[req.envelopeIndex].budgetAmount) {
        res.status(400).send("Insufficient funds")
    } else {
        envelopes[req.envelopeIndex].budgetAmount -= subtractAmount;
        res.status(200).send("Funds subtracted")
    }
});


// DELETE route to remove an envelope
router.delete('/:envelopeName', (req, res, next) => {
    const { envelopeName } = req.params
    envelopes.splice(req.envelopeIndex, 1);
    res.status(204).send(`Succesfully deleted envelope: ${envelopeName}`);
});


// POST route to transfer funds from one envelope to another
router.post('/:envelopeName/:toEnvelopeName/:transfer', (req, res, next) => {
    const { transfer } = req.params;
    if (isNaN(transfer)) {
        res.status(400).send("Transfer amount must be a number")
    }
    envelopes[req.envelopeIndex].budgetAmount -= Number(transfer);
    envelopes[req.toEnvelopeIndex].budgetAmount += Number(transfer);
    console.log(`Succesfully transferred ${transfer} from ${envelopes[req.envelopeIndex].category} to ${envelopes[req.toEnvelopeIndex].category}`)
    res.sendStatus(200);
});


// Export the routers
module.exports = router;