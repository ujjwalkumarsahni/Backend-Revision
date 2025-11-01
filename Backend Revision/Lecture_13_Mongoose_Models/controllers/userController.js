import userModel from "../Models/userModel.js";

export const userRegister = async (req, res) => {
    const { name, email , password} = req.body;
    try {
        const user = await userModel.create({ name, email, password });
        res.redirect('/users');
    } catch (error) {
        res.send({message: 'Error creating user', error: error.message, success: false});
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        // res.send({message: 'Users fetched successfully!', users: users, success: true});
        res.render('users', { users });
    } catch (error) {
        res.send({message: 'Error fetching users', error: error.message, success: false});
    }
}