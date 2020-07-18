import config from './config';
import apiRouter from './api';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';
import bodyParser from 'body-parser';

const server = express();

server.use(bodyParser.json());
server.listen(config.port, config.host,()=> {
    console.info('Express listening on port ', config.port);
});
// ------------------------- Middleware ------------------------------
server.set('view engine','ejs');
server.use('/api',apiRouter);
server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname,'views')
}));

server.get(['/', '/contests/:contestId'],(req,res)=>{
    serverRender(req.params.contestId)
        .then(({initialMarkup, initialData}) => {
            res.render('index',{
                initialMarkup,
                initialData
            });
        })
        .catch(error => {
            console.error(error);
            res.status(404).send('Bad Request');
        }) 
    
});

server.use(express.static('public'));