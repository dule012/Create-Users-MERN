import React, { Component } from 'react'
import TrList from './trList'
import THead from './tHead'
import { connect } from 'react-redux';
import { saveUser, deleteUser } from '../actions/mainActions'

class Home extends Component {
    componentDidMount() {
        if (this.props.arrOfUsers.length === 0) {
            fetch('/home')
                .then((response) => {
                    return response.json()
                })
                .then((response) => {
                    response.forEach((el, i) => {
                        this.props.saveUser(el.idOfUser, el.firstName, el.lastName, el.phoneNumber, el.city, el.address)
                    })
                })
        }
    }
    deleteOnClick = (i) => {
        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idOfUser: this.props.arrOfUsers[i][0] })
        }
        fetch('/home', options)
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
/*
function f1(n) {
    this.prop1 = n,
        this.prop2 = setTimeout(this.method1, 1000)
}

f1.prototype.method1 = function () {
    console.log(this)
}

// f1.prototype.method1()

function f2(n) {
    this.prop222 = n
    this.work = this.method1
}

f2.prototype.__proto__ = f1.prototype

const obj1 = new f1(1)
const obj2 = new f2('ddd')

// obj2.work()

function f3(n) {
    this.svojstvo1 = n
    this.svojstvo2 = obj2.work.bind(this)
}

const obj3 = new f3('aaa')
obj3.svojstvo2()



const o3 = function f3() {
    console.log('go')
}
const o4 = o3
console.log(o4.prototype)

function trying(n) {
    this.a = this.b
    this.b = n
}
const obj5 = new trying(5)
console.log(obj5)

const arra = [[1], 3, 2, 4, 5, 2]
console.log(arra.lastIndexOf(2, 1))

const arrb = [1, 2, 3, 2, 5]
console.log(arrb.indexOf(2, -1))
*/