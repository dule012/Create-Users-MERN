import React, { Component } from 'react'
import { connect } from 'react-redux'

class Edit extends Component {
    componentDidMount() {
        fetch(`/edit/${this.props.match.params.id}`)
            .then((response) => {
                return response.json()
            })
            .then((response) => {

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

export default Edit