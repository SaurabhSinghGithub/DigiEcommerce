import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Pagination = ({ name }) => {
    return (
        <Wrapper>
            <div className="text">
                <Link to="/">Home</Link>/
                <span>{name}</span>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
margin: 4rem 2rem;
.text {
    font-size: 2.5rem;
}
`

export default Pagination;