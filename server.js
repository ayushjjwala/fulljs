import config from './config';
import apiRouter from './api';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
const server = express();

server.listen(config.port, ()=> {
    console.info('Express listening on port ', config.port);
});
// ------------------------- Middleware ------------------------------
server.set('view engine','ejs');
server.use('/api',apiRouter);

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname,'views')
}));

server.get('/',(req,res)=>{
    res.render('index',{
        content: 'Hello Express and <em>EJS</em>!'
    });
});

server.use(express.static('public'));