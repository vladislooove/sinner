import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from './etc/config.json'

import * as db from './utils/DataBaseUtils.js';

db.setUpConnection();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/sins', (req,res)=>{
    db.listSins().then(data => res.send(data));
});

app.post('/sins', (req,res)=>{
    db.createSins(req.body).then(data=> res.send(data));
});

app.delete('/sins:id', (req,res)=>{
    db.deleteSins(req.params.id).then(data=> res.send(data));
});

const server = app.listen(serverPort, () => {
    console.log('Server is running on ' + serverPort);
})