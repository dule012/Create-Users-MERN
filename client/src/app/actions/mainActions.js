export const saveUser = (firstName, lastName, phoneNumber, city, address) => {
    return {
        type: 'save_user',
        payload: [firstName, lastName, phoneNumber, city, address]
    }
}

export const changeInputValue = (key, value) => ({
    type: key,
    payload: value
})