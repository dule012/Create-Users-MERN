import React, { Component } from 'react'
import { saveUser, changeInputValue, resetInputs } from '../actions/mainActions'
import { connect } from 'react-redux';


class NewUser extends Component {

    submit = () => {
        const firstName = this.props.firstNameValue
        const lastName = this.props.lastNameValue
        const phoneNumber = this.props.phoneNumberValue
        const city = this.props.cityValue
        const address = this.props.addressValue

        if (firstName === '' && lastName === '' && phoneNumber === '' && city === '' && address === '') {
            return
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName,
                lastName,
                phoneNumber,
                city,
                address
            })
        }
        fetch('/newuser', options)
            .then((response) => {
                this.props.resetInputs()
                return response.json()
            }).then((response) => {
                this.props.saveUser(response.idOfUser, response.firstName, response.lastName, phoneNumber, city, address)
            })
    }
    typing = (e) => {
        this.props.changeInputValue(e.target.name, e.target.value)
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 offset-1">
                        <input type="text" name="firstName" value={this.props.firstNameValue} placeholder="First Name" className="col-10 ofsset-1" onChange={this.typing} />
                        <input type="text" name="lastName" value={this.props.lastNameValue} placeholder="Last Name" className="col-10 ofsset-1" onChange={this.typing} />
                        <input type="number" name="phoneNumber" value={this.props.phoneNumberValue} placeholder="Phone Number" className="col-10 ofsset-1" onChange={this.typing} />
                        <input type="text" name="city" value={this.props.cityValue} placeholder="City" className="col-10 ofsset-1" onChange={this.typing} />
                        <input type="text" name="address" value={this.props.addressValue} placeholder="Address" className="col-10 ofsset-1" onChange={this.typing} />
                        <div onClick={this.submit}>
                            Save
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    saveUser: (idOfUser, firstName, lastName, phoneNumber, city, address) => { dispatch(saveUser(idOfUser, firstName, lastName, phoneNumber, city, address)) },
    changeInputValue: (key, value) => { dispatch(changeInputValue(key, value)) },
    resetInputs: () => { dispatch(resetInputs()) }
})
const mapStateToProps = (state) => ({ ...state })



export default connect(mapStateToProps, mapDispatchToProps)(NewUser)
