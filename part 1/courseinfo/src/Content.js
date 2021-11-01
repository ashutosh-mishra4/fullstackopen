import React from 'react'
import Part from './Part.js'

const Content = (props) => {
    return (
        <div>
            <Part parts={props.parts} />
            <Part />
            <Part />
        </div>
    )
}

export default Content