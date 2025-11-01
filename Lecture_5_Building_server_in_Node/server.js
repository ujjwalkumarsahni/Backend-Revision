import http from 'http';

const server = http.createServer((req,res) => {
    res.end("You requested for somthing!");
});


const port = 3000;
server.listen(port, () => console.log(`Server is listening on port ${port}`));