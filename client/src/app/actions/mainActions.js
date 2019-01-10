export const saveUser = (idOfUser, firstName, lastName, phoneNumber, city, address) => {
    return {
        type: 'save_user',
        payload: [idOfUser, firstName, lastName, phoneNumber, city, address]
    }
}

export const changeInputValue = (key, value) => ({
    type: key,
    payload: value
})

export const resetInputs = () => ({
    type: 'reset_inputs'
})