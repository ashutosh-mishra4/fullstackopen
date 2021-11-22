import React from 'react'

const StatisticLine = ({text, value}) => {
    return (
        <div>
            <table>
                <tbody> 
                    <tr>
                        <td>{text}</td>
                        <td>{value.toString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StatisticLine
