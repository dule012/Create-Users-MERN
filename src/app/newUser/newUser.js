import React, { Component } from 'react'


class NewUser extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 offset-1">
                        <input type="text" name="firstName" value="" placeholder="First Name" className="col-10 ofsset-1" />
                        <input type="text" name="lastName" value="" placeholder="Last Name" className="col-10 ofsset-1" />
                        <input type="number" name="phoneNumber" value="" placeholder="Phone Number" className="col-10 ofsset-1" />
                        <input type="text" name="city" value="" placeholder="City" className="col-10 ofsset-1" />
                        <input type="text" name="address" value="" placeholder="Address" className="col-10 ofsset-1" />
                        <div >
                            Save
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewUser
