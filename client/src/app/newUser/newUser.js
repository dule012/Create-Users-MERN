import React, { Component } from 'react'
import { saveUser, changeInputValue } from '../actions/mainActions'
import { connect } from 'react-redux';


class NewUser extends Component {

    submit = () => {
        const firstName = this.props.firstNameValue
        const lastName = this.props.lastNameValue
        const phoneNumber = parseInt(this.props.phoneNumberValue)
        const city = this.props.cityValue
        const address = this.props.addressValue
        this.props.saveUser(firstName, lastName, phoneNumber, city, address)
        console.log(this.props)
    }
    typing = (e) => {
        this.props.changeInputValue(e.target.name, e.target.value)
        console.log(this.props)
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
    saveUser: (firstName, lastName, phoneNumber, city, address) => { dispatch(saveUser(firstName, lastName, phoneNumber, city, address)) },
    changeInputValue: (key, value) => { dispatch(changeInputValue(key, value)) }
})
const mapStateToProps = (state) => ({ ...state })



export default connect(mapStateToProps, mapDispatchToProps)(NewUser)
