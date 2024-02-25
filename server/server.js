const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/openai-request', (req, res) => {
    const userInput = req.body.userInput;
    // Process userInput or make OpenAI API request as needed
    res.json({ result: userInput });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
