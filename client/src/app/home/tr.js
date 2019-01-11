import React from 'react'
import Td from './td'

const Tr = (props) => {
    return (
        <tr>
            {props.arr.map((el, i) => {
                if (i === 7) {
                    return <Td posInArr={props.posInArr} action={props.action} value={el} isDeleteButton={true} isEditButton={false} key={i} />
                } else if (i === 6) {
                    return <Td posInArr={props.posInArr} isDeleteButton={false} isEditButton={true} value={el} key={i} />
                }
                return <Td value={el} isDeleteButton={false} isEditButton={false} key={i} />
            })}
        </tr>
    )
}

export default Tr
