import contactModel from "../Models/contactModel.js"

// create new contact
export const newContact = async (req, res) => {
    try {
        const { name, email, phone, type } = req.body;

        if (name === "" || email === "" || phone === "" || type === "") {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const saveContact = await contactModel.create({ name, email, phone, type, user: req.user })

        res.status(201).json({ message: "Contact save successfully...", saveContact, success: true });

    } catch (error) {
        res.status(500).json({ message: "Login Error", success: false });
    }
}

// get all contact
export const getAllContact = async (req, res) => {

    const userContact = await contactModel.find();

    if (!userContact) {
        return res.status(400).json({ message: "No Contact Exist", success: false });
    }

    res.status(201).json({ message: "All Contact fetched", userContact, success: true });
}

// get contact by id
export const getContactById = async (req, res) => {
    try {
        const id = req.params.id;
        const userContact = await contactModel.findById(id);

        if (!userContact) {
            return res.status(400).json({ message: "No Contact Exist", success: false });
        }
        res.status(201).json({ message: "Contact fetched", userContact, success: true });
    } catch (error) {
        res.status(500).json({ message: "getContactById Error", success: false });
    }
}

// update contact by id
export const updateContactById = async (req,res) =>{
    try {
        const id = req.params.id;
        const { name, email, phone, type } = req.body;

        let updatedContact = await contactModel.findByIdAndUpdate(id, { name, email, phone, type }, {new: true});

        if (!updatedContact) {
            return res.status(400).json({ message: "No Contact Exist", success: false });
        }

        res.status(201).json({ message: "Contact updated successfully...", updatedContact, success: true });

    } catch (error) {
        res.status(500).json({ message: "updateContactById Error", success: false });
    }
}

// delete contact by id
export const deleteContactById = async (req,res) =>{
    try {
        const id = req.params.id;

        let deletedContact = await contactModel.findOneAndDelete(id);

        if (!deletedContact) {
            return res.status(400).json({ message: "No Contact Exist", success: false });
        }

        res.status(201).json({ message: "Contact deleted successfully...", success: true });

    } catch (error) {
        res.status(500).json({ message: "deleteContactById Error", success: false });
    }
}

// get contact by user id
export const getContactByUserId = async (req, res) => {
    try {
        const id = req.params.id;
        const userContact = await contactModel.find({user: id});

        if (!userContact) {
            return res.status(400).json({ message: "No Contact Exist", success: false });
        }
        res.status(201).json({ message: "User Specific Contact fetched", userContact, success: true });
    } catch (error) {
        res.status(500).json({ message: "getContactById Error", success: false });
    }
}

