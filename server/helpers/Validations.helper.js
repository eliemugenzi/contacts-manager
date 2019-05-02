import Joi from "joi";
class Validations{
    static validateContact(contact) {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            phone: Joi.string().min(10).max(30).required()
        });
        return Joi.validate(contact, schema);
    }

    static validatePhone(contact) {
        const schema = Joi.object().keys({
            phone:Joi.string().min(10).max(30).required()
        })
        return Joi.validate(contact, schema);
    }

    static validateName(contact) {
        const schema = Joi.object().keys({
            name:Joi.string().required()
        })

        return Joi.validate(contact, schema);
    }
}

export default Validations;