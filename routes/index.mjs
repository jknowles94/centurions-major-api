import express from 'express';
import UserController from '../controllers/users.mjs';
import EventController from '../controllers/events.mjs';

const router = express.Router();

//Get users Items
router.get('/api/users', UserController.getAllUsers);
//create user
router.post('/api/user', UserController.createUser);

//Get Events
router.get('/api/events', EventController.getAllEvents);

router.get('/api/event/:id', EventController.getSingleEvent);

//create event
router.post('/api/event', EventController.createEvent);


export default router;