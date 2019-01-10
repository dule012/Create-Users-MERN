
export const initialState = {
    arrOfUsers: [],
    firstNameValue: '',
    lastNameValue: '',
    phoneNumberValue: '',
    cityValue: '',
    addressValue: ''
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
            return { ...state, firstNameValue: '', lastNameValue: '', phoneNumberValue: '', cityValue: '', addressValue: '' }
        default:
            return state;
    }
}

