
export const initialState = {
    arrOfUsers: [],
    idOfUser: 1,
    firstNameValue: '',
    lastNameValue: '',
    phoneNumberValue: '',
    cityValue: '',
    addressValue: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'save_user':
            console.log('reducer')
            return { ...state, arrOfUsers: [...state.arrOfUsers, [state.idOfUser++, ...action.payload]] };
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
        default:
            return state;
    }
}

