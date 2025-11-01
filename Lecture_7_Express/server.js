import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from Express!');
})

app.get('/about', (req, res) => {
    res.send('Hello this is about us page');
});


const PORT =  3000;
app.listen(PORT, () => console.log("Server runing on port : ", PORT));