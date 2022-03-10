// Set our app variable equire to the import of the express package which itself a function
const express =  require('express');
const app = express();
const PORT = 8080;

// this is MIDDLEWARE which is sharecode that runs before every endpoint I've defined and tells
// express json before data hits the function being used to handle the request
// every request that comes in, with go through this app.use first and covert the body into json
app.use(express.json());

// here i'm creating the tshirt endpoint to the server and handling any request sent to it
app.get('/tshirt', (req, res) => {
    res.status(200).send ({
        tshirt: '👕',
        size: 'large'
    })
});

// this is a second endpoint with a dynamic URL parameter/ ROUTE PARAMS.
// POST requests mean that the user is trying to create new data on the server
app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    // this param is sent in the body of our url. Go to the body tab in postman
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!'})
    };

    res.send({
        tshirt: `👕 with your logo ${logo} and ID of ${id}`,
    })
});

app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} is listening . . .`)
});

// https://swagger.io/specification/