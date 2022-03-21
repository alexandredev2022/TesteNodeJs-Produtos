import express from 'express';
import response from '../utils/response'
import list from './api/list';
const routes = express.Router();


routes.get('/api/v1/product/list', (req, res) => response(req,res,list))


export default routes;