import React from 'react'
import styled from 'styled-components'

const VerticalLine = styled.div`
    width: 0.5rem;
    height: 100%;
    margin: auto 35px auto auto;
    background: ${props => {
        if (props.selected) {
            return 'rgba(253, 167, 223,0.4)'
        }
        return 'rgba(223, 230, 233,0.4)'
    }}
`

export default class CheckRow extends React.Component {

    render() {
        return (
            <>
                <VerticalLine selected={this.props.selected}></VerticalLine>
            </>
        )
    }
}