import React from 'react'
import Part from './Part.js'

const Content = (props) => {
    return (
        <div>
            <Part part={props.parts} />
        </div>
    )
}

export default Content