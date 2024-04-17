import React from 'react'
import { infoText } from './constants'
import IconRenderer from './IconRenderer'
function Card(props) {
    return (
        <div>
            <dir>
                <IconRenderer icon={props.icon} />
                <h2>{props.heading}</h2>
            </dir>
            <h2>{props.paragraph}</h2>
        </div>
    )
}

export default Card
