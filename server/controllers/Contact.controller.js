import Contact from "../models/Contact.model";

class ContactController {
  static findAll(req, res) {
    Contact.findAll()
      .then(contacts => {
        res.json({
          status: 200,
          data: contacts
        });
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          error: "Internal Server error!"
        });
      });
  }

  static findOne(req, res) {
    const { id } = req.params;
    Contact.find({ id })
      .then(contact => {
        if (Object.keys(contact).length) {
          res.json({
            status: 200,
            data: contact
          });
        } else {
          res.status(404).json({
            status: 404,
            error: "This contact is not available!"
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          error: "Internal Server error!"
        });
      });
  }

  static createNew(req, res) {
    const { name, phone } = req.body;
    const newContact = new Contact({
      name,
      phone
    });
    newContact
      .save()
      .then(result => {
        res.status(201).json({
          status: 201,
          message: "New Contact added",
          data: result
        });
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          error: "Internal Server Error!"
        });
      });
  }

  static deleteContact(req, res) {
    const { id } = req.params;
    Contact.find({ id })
      .then(contact => {
        if (Object.keys(contact).length) {
          const currentContact = new Contact(contact);
          currentContact
            .delete()
            .then(() => {
              res.json({
                status: 200,
                message: "Contact Deleted successfully!"
              });
            })
            .catch(err => {
              res.status(500).json({
                status: 500,
                error: "Internal Server error!"
              });
            });
        } else {
          res.status(404).json({
            status: 404,
            error: "This contact is not available"
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          error: "Internal server error!"
        });
      });
  }

  static updateName(req, res) {
    const { name } = req.body;
    const { id } = req.params;
    Contact.find({ id })
      .then(contact => {
        if (Object.keys(contact).length) {
          const currentContact = new Contact(contact);
          currentContact
            .updateName({ name })
            .then(result => {
              res.json({
                status: 200,
                message: "Contact Updated Successfully!",
                data: result
              });
            })
            .catch(err => {
              res.status(500).json({
                status: 500,
                error: "Internal Server error!"
              });
            });
        } else {
          res.status(404).json({
            status: 404,
            error: "Contact is not available"
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          error: "Internal Server error!"
        });
      });
  }

  static updatePhone(req, res) {
    const { id } = req.params;
    const { phone } = req.body;
    Contact.find({ id })
      .then(contact => {
        if (Object.keys(contact).length) {
          const currentContact = new Contact(contact);
          currentContact
            .updatePhone({ phone })
            .then(result => {
              res.json({
                status: 200,
                message: "Phone updated successfully!",
                data: result
              });
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({
                status: 500,
                error: "Internal Server error!"
              });
            });
        } else {
          res.status(404).json({
            status: 404,
            error: "This contact is not available"
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          status: 500,
          error: "Internal Server error!"
        });
      });
  }

  static searchContact(req, res) {
    const { q } = req.query;
    Contact.search(q)
      .then(contacts => {
        if (contacts.length) {
          res.json({
            status: 200,
            data: contacts
          });
        } else {
          res.status(404).json({
            status: 404,
            error: `Contact with name ${q} is not available`
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          status: 500,
          error: `Internal Server error! ${err}`
        });
      });
  }
}

export default ContactController;
