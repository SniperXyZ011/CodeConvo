import dotenv from 'dotenv';
dotenv.config();
import http from 'http';
import app from './app.js';

const server = http.createServer(app);



server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});