import React from 'react'
import { Button } from './Styles/Button';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper>
        <img src="./images/error.png" width={450} />
        <NavLink to="/">
            <Button className='btn'>GO Back</Button>
        </NavLink>
    </Wrapper>
  )
};

const Wrapper = styled.section`
padding: 9rem 0;
display:flex;
justify-content:center;
align-items: center;
flex-direction: column;

.btn{
    font-size: 1.8rem;
    margin-top: 3rem;
}`

export default Error