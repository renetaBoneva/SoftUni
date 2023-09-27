function getFirstMongooseError(error) {
    const errors = Object.values(error.errors)[0].message;
    return errors;
}

exports.getErrorMessage = (err) => {
    switch (err.name) {
        case "Error":
            return err.message;
        case "ValidationError":
            return getFirstMongooseError(err);
        default:
            return err.message;

    }

}