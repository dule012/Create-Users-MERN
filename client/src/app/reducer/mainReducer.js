
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

export const Home_and_NewUser_reducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

export const Edit_reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'firstNameEdit':
            return { ...state, firstNameValue: action.payload };
        case 'lastNameEdit':
            return { ...state, lastNameValue: action.payload };
        case 'phoneNumberEdit':
            return { ...state, phoneNumberValue: action.payload };
        case 'cityEdit':
            return { ...state, cityValue: action.payload };
        case 'addressEdit':
            return { ...state, addressValue: action.payload };
        case 'reset_inputs':
            return { ...state, firstNameValue: '', lastNameValue: '', phoneNumberValue: '', cityValue: '', addressValue: '' };
        default:
            return state;
    }
}