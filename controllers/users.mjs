import users from '../db/users.mjs';

class UserController {
  getAllUsers(req, res) {
    return res.status(200).send({
      success: true,
      message: 'users successfully retrieved',
      users: users
    });
  }
  createUser(req, res) {
    if (!req.body.name) {
      return res.status(400).send({
        success: false,
        message: 'An user requires a field name.'
      });
    } else if(!req.body.country) {
      return res.status(400).send({
        success: false,
        message: 'An user requires a field country.'
      });
    } else if(!req.body.handicap) {
      return res.status(400).send({
        success: false,
        message: 'An user requires a field handicap.'
      });
    } else if(isNaN(req.body.handicap)) {
      return res.status(400).send({
        success: false,
        message: 'Field handicap should be a integer.'
      });
    }

    let newUser = {
      id: users.length + 1,
      ...req.body,
      wins: 0,
      current_season_standing: 0,
      current_season_points: 0,
    };
    users.push(newUser);
    return res.status(201).send({
      success: true,
      message: 'Event successfully created.',
      users
    });
  }
}

const userController = new UserController();

export default userController;