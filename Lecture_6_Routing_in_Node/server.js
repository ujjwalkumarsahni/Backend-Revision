import http from 'http';

const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url);
    // res.end('Hello from the server!');

    if(req.url === '/about'){
        res.end("This is about us page");
    }else if(req.url === '/contact'){
        res.end("This is contact us page");
    }else{
        res.end("This is home page");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});