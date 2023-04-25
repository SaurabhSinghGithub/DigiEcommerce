import React from 'react'
import styled from 'styled-components'

const People = () => {
  return (
    <Wrapper className='container'>
      <div className="people">
        <h1>Our key People</h1>
        <div className="images">
          <img src={require("../Images/1.png")} alt="" />
          <img src={require("../Images/2.png")} alt="" />
          <img src={require("../Images/3.png")} alt="" />
          <img src={require("../Images/4.png")} alt="" />
          <img src={require("../Images/5.png")} alt="" />
          <img src={require("../Images/6.png")} alt="" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.people {
  min-height: 20rem;
     h1 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2.5rem;
      color: #1861a1;
     }

     .images {
      display: grid;
      grid-template-columns: repeat(6,1fr);
      gap: 3rem;
        img {
          width: 100%;
          margin: auto;
          object-fit: cover;
        }
     }
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
   .people {

       .images {
        grid-template-columns: repeat(2,1fr);
       }

  }
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
   .people {

       .images {
        grid-template-columns: repeat(1,1fr);
       }

  }
}


`

export default People;