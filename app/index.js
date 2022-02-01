const app = require('express')();
const cors = require('cors');


app.use(cors());
app.get('/', (req, res) => {
    console.log('Hello world received a request.');
    const languageList = [
        {
            id: 1,
            name: "Python"
        },
        {
            id: 2,
            name: "JavaScript"
        },
        {
            id: 3,
            name: "Java"
        },
        {
            id: 4,
            name: "C#"
        },
        {
            id: 5,
            name: "PHP"
        },
    ]
    res.send(languageList);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});