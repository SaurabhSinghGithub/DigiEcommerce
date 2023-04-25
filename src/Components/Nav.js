import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineShoppingCart, AiFillCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from './Button';
import { useState } from 'react';
import { GlobalCartContext } from '../Context/CartContext';
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated } = useAuth0();

    const [navOpen, setNavOpen] = useState(false);
    const { totalAmount } = GlobalCartContext();

    return (

        <Wrapper>

            <div className={navOpen ? "navbar active" : "navbar"}>
                <ul className='navlinks'>
                    <li onClick={() => setNavOpen(false)}> <Link to="/">Home</Link> </li>
                    <li onClick={() => setNavOpen(false)}> <Link to="/about">About</Link> </li>
                    <li onClick={() => setNavOpen(false)}> <Link to="/products">Products</Link> </li>
                    <li onClick={() => setNavOpen(false)}> <Link to="/contact">Contact</Link> </li>
                    <li>{isAuthenticated && <h2>{user.name}</h2>}</li>
                    <li>
                        {isAuthenticated ?
                            <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </Button>
                            :
                            <Button onClick={() => loginWithRedirect()}>LOG IN</Button>
                        }
                    </li>
                    <li onClick={() => setNavOpen(false)}>
                        <Link to="/cart" className='cart'>
                            <AiOutlineShoppingCart className='cart-icon' />
                            <span className='cart-value'>{totalAmount}</span>
                        </Link>
                    </li>
                </ul>

                <div className="menu-btn">
                    <GiHamburgerMenu className='bar-icon icon'
                        onClick={() => setNavOpen(true)} />
                    <AiFillCloseCircle className='close-icon icon'
                        onClick={() => setNavOpen(false)} />
                </div>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.nav`


    .navbar {

      .navlinks {
           display: flex;
          justify-content: end;
          align-items: center;
          height: 100%;

           li {

           margin: 3rem;

            button{

              transition: all 0.1s;
               color: black;
               cursor: pointer;

               &:hover {
                  color: #edff57;
               }

             }

          a {
            font-size: 2rem;
            transition: all 0.1s;
            color: black;
            cursor: pointer;

            &:hover {
                color: ${({ theme }) => theme.colors.primary};
            }
           }

            .cart {
               position: relative;
               display: flex;
               align-items: center;
               justify-content: center;

              .cart-icon {
              margin: 0 2rem;
               font-size: 4rem;
              }

            .cart-value {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 2.5rem;
                top: -50%;
                right: 20%;
                border-radius: 50%;
                background-color: white;
                border: 1px solid black;
              }
          }
       }
     }
     .menu-btn {
          display: none;
          margin: 0 3rem;
          position: absolute;
          top: 50%;
          right: 5%;
          transform: translateY(-50%);

            .icon {
               font-size: 4rem;
               transition: all 0.1s;
               color: black;
               cursor: pointer;

               &:hover {
                color: ${({ theme }) => theme.colors.primary};
            }
          }
       }
   }

    @media (max-width: ${({ theme }) => theme.media.tab}) {

        .navbar {

            .menu-btn {
                  display: inline-block;
                   z-index: 999;

                    .close-icon{
                       display: none;
                      }
            }

            .navlinks {
                position: fixed;
                  top: -150%;
                 left: 0;
                   z-index: 999;
                  background: white;
                   height: 100vh;
                  width: 100vw;
                   display: flex;
                  align-items: center;
                    justify-content: center;
                 flex-direction: column;
            }
        }

        .active {
            .navlinks {
                  top: 0;
            }

            .menu-btn {


                    .close-icon{
                       display: inline-block;
                      }
                    .bar-icon{
                       display: none;
                      }
            }

        }
    }

`

export default Nav;