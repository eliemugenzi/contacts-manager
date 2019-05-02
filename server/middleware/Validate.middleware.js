import Validations from "../helpers/Validations.helper";

class Validate {
  static validateContact(req, res, next) {
    const { error } = Validations.validateContact(req.body);
    if (error) {
      res.status(400).json({
        status: 400,
        error: error.details[0].message.replace(/[$\/\\#,+()$~%.'":*<>{}]/g, "")
      });
    } else {
      next();
    }
  }

  static ValidateName(req, res, next) {
    const { error } = Validations.validateName(req.body);
    if (error) {
      res.status(400).json({
        status: 400,
        error: error.details[0].message.replace(/[$\/\\#,+()$~%.'":*<>{}]/g, "")
      });
    } else {
      next();
    }
  }

  static validatePhone(req, res, next) {
    const { error } = Validations.validatePhone(req.body);
    if (error) {
      res.status(400).json({
        status: 400,
        error: error.details[0].message.replace(/[$\/\\#,+()$~%.'":*<>{}]/g, "")
      });
    } else {
      next();
    }
  }
}

export default Validate;
