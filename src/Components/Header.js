import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <MainHeader>
            <div className="header">

                <Link to="/">
                    <div className="logo">
                        <img src={require("../Images/logo.png")} alt="logo" />
                    </div>
                </Link>
                <Nav />

            </div>
        </MainHeader>
    )
}

const MainHeader = styled.header`
.header {

    /* display: grid;
    grid-template-columns: .2fr 1fr;
    padding: 1rem; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
    background-color: #ebf4f7;
    position: relative;

    .logo{
        display: grid;
        place-items: center;
       img{
        width: 10rem;
        border-radius: 50%;
        transition: all 0.1s;
        cursor: pointer;
        font-size: 2rem;

            &:hover {
                color: #edff57;
               transform: scale(1.1);
               border: 1px solid #edff57;
            }
      }
    }

}

`

export default Header