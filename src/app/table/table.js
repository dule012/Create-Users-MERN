import React, { Component } from 'react'
import TrList from './trList'
import THead from './tHead'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrOfTr: [[1, 2], [3, 4], [5, 6]]
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <table className="col-10 offset-1">
                        <THead />
                        <tbody>
                            <TrList arr={this.state.arrOfTr} />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default Table