import express from "express";

import { saveSendEmails, getEmails, toggleStarredEmail, deleteEmails, 
    moveEmailsToBin } from '../controller/email-controller.js';

const routes=express.Router();

routes.post('/save',saveSendEmails)
routes.get('/emails/:type',getEmails)
routes.post('/save-draft',saveSendEmails)
routes.post('/starred', toggleStarredEmail);
routes.delete('/delete', deleteEmails);
routes.post('/bin', moveEmailsToBin);
routes.get('/',(req,res)=>{
    console.log("hello");
   res.send(
    "hello"
   )
    
})

export default routes;
