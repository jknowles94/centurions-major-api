import express from 'express';
import UserController from '../controllers/users';
import EventController from '../controllers/events';

const router = express.Router();

//Get users Items
router.get('/api/users', UserController.getAllUsers);

//Get Events
router.get('/api/events', EventController.getAllEvents);

router.get('/api/event/:id', EventController.getSingleEvent);

//create event
router.post('/api/event', EventController.createEvent);

export default router;