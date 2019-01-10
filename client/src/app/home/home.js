import React, { Component } from 'react'
import TrList from './trList'
import THead from './tHead'
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <table className="col-10 offset-1">
                        <THead />
                        <tbody>
                            <TrList arr={this.props.arrOfUsers} />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(Home)
  