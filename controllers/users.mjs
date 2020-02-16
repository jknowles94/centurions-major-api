import users from '../db/users.mjs';

class UserController {
  getAllUsers(req, res) {
    return res.status(200).send({
      success: true,
      message: 'users successfully retrieved',
      users: users
    });
  }
}

const userController = new UserController();

export default userController;