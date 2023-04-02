function UserCreateEdit({
    onClose,
    onUserCreateSubmit,
    createOrEdit,
    setCreateOrEdit,
    onChangeFormHandler,
    errorHandle,
    errors,
    _id,
    firstName,
    lastName,
    email,
    imageUrl,
    phoneNumber,
    country,
    city,
    street,
    streetNumber
}) {
    return (
        <div className="overlay">
            <div className="backdrop"></div>
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>Edit User/Add User</h2>
                        <button className="btn close" onClick={onClose}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={(e) => { onUserCreateSubmit(e, createOrEdit, setCreateOrEdit, _id) }}>
                        <div className="form-row">
                            <div className="form-group">
                                <label forhtml="firstName">First name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="firstName" name="firstName" type="text" value={firstName ? firstName : ""} onChange={onChangeFormHandler} onBlur={errorHandle} />
                                </div>
                                {errors.firstName &&
                                    <p className="form-error">
                                        {errors.firstName}
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label forhtml="lastName">Last name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="lastName" name="lastName" type="text" value={lastName ? lastName : ""} onChange={onChangeFormHandler} onBlur={errorHandle} />
                                </div>

                                {errors.lastName &&
                                    <p className="form-error">
                                        {errors.lastName}
                                    </p>
                                }
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label forhtml="email">Email</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-envelope"></i></span>
                                    <input id="email" name="email" type="text" value={email ? email : ""} onChange={onChangeFormHandler} onBlur={errorHandle} />
                                </div>
                                
                                {errors.email &&
                                    <p className="form-error">
                                        {errors.email}
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label forhtml="phoneNumber">Phone number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-phone"></i></span>
                                    <input id="phoneNumber" name="phoneNumber" type="text" value={phoneNumber ? phoneNumber : ""} onChange={onChangeFormHandler} onBlur={errorHandle} />
                                </div>

                                {errors.phoneNumber &&
                                    <p className="form-error">
                                        {errors.phoneNumber}
                                    </p>
                                }
                            </div>
                        </div>

                        <div className="form-group long-line">
                            <label forhtml="imageUrl">Image Url</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-image"></i></span>
                                <input id="imageUrl" name="imageUrl" type="text" value={imageUrl ? imageUrl : ""} onChange={onChangeFormHandler} onBlur={errorHandle} />
                            </div>

                            {errors.imageUrl &&
                                <p className="form-error">
                                    {errors.imageUrl}
                                </p>
                            }
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label forhtml="country">Country</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="country" name="country" type="text" value={country ? country : ""} onChange={onChangeFormHandler} onBlur={errorHandle} />
                                </div>

                                {errors.country &&
                                    <p className="form-error">
                                        {errors.country}
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label forhtml="city">City</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-city"></i></span>
                                    <input id="city" name="city" type="text" value={city ? city : ""} onChange={onChangeFormHandler} onBlur={errorHandle} />
                                </div>
                                {errors.city &&
                                    <p className="form-error">
                                        {errors.city}
                                    </p>
                                }
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label forhtml="street">Street</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="street" name="street" type="text" value={street ? street : ""} onChange={onChangeFormHandler} onBlur={errorHandle} />
                                </div>
                                
                                {errors.street &&
                                    <p className="form-error">
                                        {errors.street}
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label forhtml="streetNumber">Street number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-house-chimney"></i></span>
                                    <input id="streetNumber" name="streetNumber" type="text" value={streetNumber ? streetNumber : ""} onChange={onChangeFormHandler} onBlur={errorHandle} />
                                </div>
                                
                                {errors.streetNumber &&
                                    <p className="form-error">
                                        {errors.streetNumber}
                                    </p>
                                }
                            </div>
                        </div>
                        <div id="form-actions">
                            <button id="action-save" className="btn" type="submit">Save</button>
                            <button id="action-cancel" className="btn" type="button" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserCreateEdit;