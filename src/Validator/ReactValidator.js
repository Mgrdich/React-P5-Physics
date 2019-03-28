import Joi from 'joi-browser'

export default function createValidator(Checkme,schema) {
    const result = Joi.validate(Checkme, schema, { abortEarly: false });
    if (result.error === null) {
        return {};
    }

    const errors = result.error.details.reduce((all, cur) => {
        const allErrors = Object.assign({}, all);//an alternative way is written in javascript reducer file
        const path = cur.path[cur.path.length - 1];
        const message = cur.message;
        if (Object.prototype.hasOwnProperty.call(allErrors, path)) {//to check if allError object has a certian property
            allErrors[path] += message;
        } else {
            allErrors[path] = message;
        }
        return allErrors;
    }, {});

    return errors;
}
