export const saveUser = (idOfUser, firstName, lastName, phoneNumber, city, address) => {
    return {
        type: 'save_user',
        payload: [idOfUser, firstName, lastName, phoneNumber, city, address, 'Edit', 'Delete']
    }
}

export const changeInputValue = (key, value) => ({
    type: key,
    payload: value
})

export const resetInputs = () => ({
    type: 'reset_inputs'
})

export const deleteUser = (i) => ({
    type: 'delete_user',
    payload: i
})

export const userToEdit = (firstName, lastName, phoneNumber, city, address) => ({
    type: 'user_to_edit',
    payload: [firstName, lastName, phoneNumber, city, address]
})

export const updateUser = (idOfUser, firstName, lastName, phoneNumber, city, address) => ({
    type: 'user_update',
    payload: [idOfUser, firstName, lastName, phoneNumber, city, address]
})