import { useState } from "react";

import TableRow from "./TableRow";
import UserDetails from "./UserDetails";
import * as userService from '../services/userServise'
import UserCreateEdit from "./UserCreateEdit";
import DeleteUser from "./DeleteUser";

function Table({
    usersData,
    onUserCreateSubmit,
    deleteUserHandler,
    formData,
    setFormData
}) {
    const [selectedUser, setSelectedUser] = useState(null);
    const [deleteUserById, setDeleteUserById] = useState(null);
    const [createOrEdit, setCreateOrEdit] = useState('create');
    const [errors, setErrors] = useState({
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        imageUrl: "",
        country: "",
        city: "",
        street: "",
        streetNumber: ""
    });

    function onInfo(userId) {
        userService.getSelectedUser(userId)
            .then(usersDetails => setSelectedUser(usersDetails))
            .catch(err => console.log(err.message));
    }

    function onClose() {
        setSelectedUser(null);
        setDeleteUserById(null);
        setFormData(null)
    }

    function onDeleteClick(_id) {
        setDeleteUserById(_id);
    }

    function onEditClick(_id) {
        userService.getSelectedUser(_id)
            .then(usersDetails => {
                setCreateOrEdit('edit')

                setFormData(state => ({
                    _id: usersDetails._id,
                    firstName: usersDetails.firstName,
                    lastName: usersDetails.lastName,
                    email: usersDetails.email,
                    imageUrl: usersDetails.imageUrl,
                    phoneNumber: usersDetails.phoneNumber,
                    country: usersDetails.address.country,
                    city: usersDetails.address.city,
                    street: usersDetails.address.street,
                    streetNumber: usersDetails.address.streetNumber
                }))
            })
            .catch(err => console.log(err.message));
    }


    function onChangeFormHandler(e) {
        setFormData(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    function errorHandle(e) {
        const currentEl = e.target.name;
        const value = e.target.value;
        let err;
        
        // Email is not valid!
        // Phone number is not valid!
        // ImageUrl is not valid!
        // Country should be at least 2 characters long!
        // City should be at least 3 characters long!
        // Street should be at least 3 characters long!
        // Street number should be a positive number!

        switch (currentEl) {
            case 'firstName':
                if (value.length < 3) {
                    err = "First name should be at least 3 characters long!"
                    setErrors(state => ({...state, [currentEl]: err}));
                } else if (value.length > 19) {
                    err = "First name shouldn't be longer than 19 characters!"
                    setErrors(state => ({...state, [currentEl]: err}));
                } else {
                    setErrors(state => ({...state, [currentEl]: ""}));
                }
                break;
            case 'lastName':
            break;
            case 'email':
            break;
            case 'phoneNumber':
            break;
            case 'imageUrl':
            break;
            case 'country':
            break;
            case 'city':
            break;
            case 'street':
            break;
            case 'streetNumber':
            break;
            default:
                break;
        }

    }


    return (
        <>
            {selectedUser &&
                <UserDetails
                    {...selectedUser}
                    onClose={onClose}
                />}
            {formData &&
                <UserCreateEdit
                    onClose={onClose}
                    onUserCreateSubmit={onUserCreateSubmit}
                    createOrEdit={createOrEdit}
                    setCreateOrEdit={setCreateOrEdit}
                    onChangeFormHandler={onChangeFormHandler}
                    errorHandle={errorHandle}
                    errors={errors}
                    {...formData}
                />}
            {deleteUserById &&
                <DeleteUser
                    onClose={onClose}
                    _id={deleteUserById}
                    setDeleteUserById={setDeleteUserById}
                    deleteUserHandler={deleteUserHandler}
                />}
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                First name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Last name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Email<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Phone<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map(user => <TableRow
                            key={user._id}
                            {...user}
                            onInfo={onInfo}
                            onDeleteClick={onDeleteClick}
                            onEditClick={onEditClick}
                        />)}

                    </tbody>
                </table>
            </div>
            <button className="btn-add btn" onClick={() => { setFormData(true) }}>Add new user</button>
        </>
    );

}
export default Table; 
