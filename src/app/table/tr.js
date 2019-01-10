import React from 'react'
import Td from './td'

const Tr = (props) => {
    return (
        <tr>
            {props.arr.map((el, i) => {
                return <Td value={el} key={i} />
            })}
        </tr>
    )
}

export default Tr