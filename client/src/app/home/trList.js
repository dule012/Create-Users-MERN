import React from 'react'
import Tr from './tr'

const TrList = (props) => {
    return (
        <React.Fragment>
            {props.arr.map((el, i) => {
                return <Tr arr={el} key={i} />
            })}
        </React.Fragment>
    )
}

export default TrList