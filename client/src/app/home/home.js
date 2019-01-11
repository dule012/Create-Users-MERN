import React, { Component } from 'react'
import TrList from './trList'
import THead from './tHead'
import { connect } from 'react-redux';
import { saveUser, deleteUser } from '../actions/mainActions'

class Home extends Component {
    // componentDidMount() {
    //     fetch('/')
    //         .then((response) => {
    //             return response.json()
    //         })
    //         .then((response) => {
    //             response.forEach((obj, i) => {
    //                 this.props.saveUser(obj.idOfUser, obj.firstName, obj.lastName, obj.phoneNumber, obj.city, obj.address)
    //             })
    //         })
    // }
    
    deleteOnClick = (i) => {
        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idOfUser: this.props.arrOfUsers[i][0] })
        }
        fetch('/', options)
        .then((response) => {
            this.props.deleteUser(i)
            })

    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <table className="col-10 offset-1">
                        <THead />
                        <tbody>
                            <TrList action={(i) => { this.deleteOnClick(i) }} arr={this.props.arrOfUsers} />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => ({
    deleteUser: (i) => { dispatch(deleteUser(i)) },
    saveUser: (idOfUser, firstName, lastName, phoneNumber, city, address) => { dispatch(saveUser(idOfUser, firstName, lastName, phoneNumber, city, address)) },

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)