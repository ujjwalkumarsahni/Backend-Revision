import express from 'express'
import { getAllContact, newContact, getContactById, updateContactById, deleteContactById, getContactByUserId } from '../Controllers/contactController.js';
import { isAuthenticated } from '../Middlewares/userAuth.js';

const contactRouter = express.Router()

contactRouter.post('/new' ,isAuthenticated, newContact);
contactRouter.get('/', getAllContact);
contactRouter.get('/:id', getContactById);
contactRouter.put('/:id', isAuthenticated, updateContactById)
contactRouter.delete('/:id', isAuthenticated, deleteContactById)
contactRouter.get('/userId/:id', getContactByUserId)
export default contactRouter;