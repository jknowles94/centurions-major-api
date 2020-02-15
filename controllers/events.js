import events from '../db/events';

class EventsController {
  getAllEvents(req, res) {
    return res.status(200).send({
      success: true,
      message: 'Events successfully retrieved',
      events: events
    });
  }
  getSingleEvent(req, res) {
    const id = parseInt(req.params.id, 10);
    const index = events.findIndex((el) => el.id === id);
    if (index != -1) {
      return res.status(200).send({
        success: true,
        message: 'Event retrieved',
        event: events[index]
      });
    }

    return res.status(404).send({
      success: false,
      message: 'Event does not exist'
    });
  }
  createEvent(req, res) {
    if (!req.body.name) {
      return res.status(400).send({
        success: false,
        message: 'An event requires a name.'
      });
    } else if (!req.body.winner_id && isNaN(req.body.winner_id)) {
      return res.status(400).send({
        success: false,
        message: 'An event requires a winner_id.'
      });
    } else if (!req.body.results || !req.body.results.length <= 0) {
      return res.status(400).send({
        success: false,
        message: 'An event requires at least 1 result'
      });
    } else {
      let index = users.findIndex(el => req.body.winner_id === el.id);
      if (index === -1) {
        return res.status(400).send({
          success: false,
          message: 'Cannot find a user with that winner_id'
        });
      }
    }

    let newEvent = {
      id: events.length + 1,
      ...req.body
    };
    events.push(newEvent);
    return res.status(201).send({
      success: true,
      message: 'Event successfully created.',
      events
    });
  }
}

const EventController = new EventsController();

export default EventController;