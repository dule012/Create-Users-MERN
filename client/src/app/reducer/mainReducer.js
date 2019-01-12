
export const initialState = {
    arrOfUsers: [],
    firstNameValue: '',
    lastNameValue: '',
    phoneNumberValue: '',
    cityValue: '',
    addressValue: '',
    firstNameValueEdit: '',
    lastNameValueEdit: '',
    phoneNumberValueEdit: '',
    cityValueEdit: '',
    addressValueEdit: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'save_user':
            return { ...state, arrOfUsers: [...state.arrOfUsers, action.payload] };
        case 'firstName':
            return { ...state, firstNameValue: action.payload };
        case 'lastName':
            return { ...state, lastNameValue: action.payload };
        case 'phoneNumber':
            return { ...state, phoneNumberValue: action.payload };
        case 'city':
            return { ...state, cityValue: action.payload };
        case 'address':
            return { ...state, addressValue: action.payload };
        case 'reset_inputs':
            return { ...state, firstNameValue: '', lastNameValue: '', phoneNumberValue: '', cityValue: '', addressValue: '' };
        case 'delete_user':
            return { ...state, arrOfUsers: [...state.arrOfUsers.slice(0, action.payload), ...state.arrOfUsers.slice(action.payload + 1)] };
        case 'user_to_edit':
            return {
                ...state, firstNameValueEdit: action.payload[0], lastNameValueEdit: action.payload[1], phoneNumberValueEdit: action.payload[2], cityValueEdit: action.payload[3], addressValueEdit: action.payload[4]
            };
        case 'user_update':
            return {
                ...state, arrOfUsers: state.arrOfUsers.map((el) => {
                    if (el[0] == action.payload[0]) {
                        return [action.payload[0], action.payload[1], action.payload[2], action.payload[3], action.payload[4], action.payload[5], 'Edit', 'Delete']
                    }
                    return el
                })
            };
        case 'firstNameEdit':
            return { ...state, firstNameValueEdit: action.payload };
        case 'lastNameEdit':
            return { ...state, lastNameValueEdit: action.payload };
        case 'phoneNumberEdit':
            return { ...state, phoneNumberValueEdit: action.payload };
        case 'cityEdit':
            return { ...state, cityValueEdit: action.payload };
        case 'addressEdit':
            return { ...state, addressValueEdit: action.payload };
        default:
            return state;
    }
}

