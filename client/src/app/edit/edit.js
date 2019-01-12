import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userToEdit, updateUser, resetInputs, changeInputValue } from '../actions/mainActions'

class Edit extends Component {
    componentDidMount() {
        fetch(`/edit/${this.props.match.params.id}`)
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                this.props.userToEdit(response.firstName, response.lastName, response.phoneNumber, response.city, response.address)
            })
    }
    submit = () => {
        const firstName = this.props.firstNameValueEdit
        const lastName = this.props.lastNameValueEdit
        const phoneNumber = this.props.phoneNumberValueEdit
        const city = this.props.cityValueEdit
        const address = this.props.addressValueEdit

        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName,
                lastName,
                phoneNumber,
                city,
                address
            })
        }
        fetch(`/edit/${this.props.match.params.id}`, options)
            .then((response) => {
                this.props.resetInputs()
                return response.json()
            })
            .then((response) => {
                console.log(response)
                this.props.updateUser(response.idOfUser, response.firstName, response.lastName, response.phoneNumber, response.city, response.address)
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
                        <input type="text" name="firstNameEdit" value={this.props.firstNameValueEdit} placeholder="First Name" className="col-10 ofsset-1" onChange={this.typing} />
                        <input type="text" name="lastNameEdit" value={this.props.lastNameValueEdit} placeholder="Last Name" className="col-10 ofsset-1" onChange={this.typing} />
                        <input type="number" name="phoneNumberEdit" value={this.props.phoneNumberValueEdit} placeholder="Phone Number" className="col-10 ofsset-1" onChange={this.typing} />
                        <input type="text" name="cityEdit" value={this.props.cityValueEdit} placeholder="City" className="col-10 ofsset-1" onChange={this.typing} />
                        <input type="text" name="addressEdit" value={this.props.addressValueEdit} placeholder="Address" className="col-10 ofsset-1" onChange={this.typing} />
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
    userToEdit: (firstName, lastName, phoneNumber, city, address) => { dispatch(userToEdit(firstName, lastName, phoneNumber, city, address)) },
    resetInputs: () => { dispatch(resetInputs()) },
    changeInputValue: (key, value) => { dispatch(changeInputValue(key, value)) },
    updateUser: (idOfUser, firstName, lastName, phoneNumber, city, address) => { dispatch(updateUser(idOfUser, firstName, lastName, phoneNumber, city, address)) }
})
const mapStateToProps = (state) => ({ ...state })

export default connect(mapStateToProps, mapDispatchToProps)(Edit)