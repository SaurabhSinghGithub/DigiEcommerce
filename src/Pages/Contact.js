import React from 'react'
import styled from 'styled-components';
import { Button } from '../Components/Button';
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Wrapper className='container'>
      <div className="contact">

        <h1>Contact Page</h1>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4591590505024!2d72.81802771437631!3d19.04353945794191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c94f6b50768d%3A0x9a398f67230adc3d!2sTaj%20Lands%20End%2C%20Mount%20Mary%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1681211160080!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <form action="https://formspree.io/f/mrgvokrz"
          method="POST" >

          <div className="form">
            <input type="text" name="username" id="" placeholder='Username' required autoComplete="off" value={isAuthenticated ? user.name : ""} />
            <input type="email" name="email" id="" placeholder='Email' autoComplete="off" required value={isAuthenticated ? user.email : ""}/>
            <textarea name="message" id="" cols="30" rows="10" autoComplete="off"></textarea>
            <Button>SEND</Button>
          </div>
        </form>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.contact {
  margin: 3rem 0;
  h1 {
    font-size: 3.5rem;
    color: #1861a1;
    text-align: center;
    margin: 3rem 0;
  }
  .form{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 2rem;
    width: 70%;
    margin: 3rem auto;
    input,textarea {
      border-radius: .5rem;
      padding: 1rem;
      border: 1px solid #1861a1;
    }
    button {
      max-width: 20%;
    }
  }
}



`

export default Contact;