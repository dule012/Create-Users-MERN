import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Td = (props) => {
    //other tds will execute empty func
    const func = props.isDeleteButton === true ? (posInArr) => { props.action(props.posInArr) } : () => { }
    return (
        <td onClick={func}>
            {props.isEditButton === true ? <Link to={`/edit/${props.arrOfUsers[props.posInArr][0]}`}>{props.value}</Link> : props.value}
        </td>
    )
}
const mapStateToProps = (state) => ({ ...state })
export default connect(mapStateToProps, null)(Td)