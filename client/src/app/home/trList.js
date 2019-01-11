import React from 'react'
import Tr from './tr'

const TrList = (props) => {
    return (
        <React.Fragment>
            {props.arr.map((el, i) => {
                return <Tr action={props.action} arr={el} posInArr={i} key={i} />
            })}
        </React.Fragment>
    )
}

export default TrList