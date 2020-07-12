import express from 'express';
import data from '../src/testData';
const router = express.Router();

export default router;

router.get('/contests',(req,res)=>{
    res.send({contests: data.contests});
});
