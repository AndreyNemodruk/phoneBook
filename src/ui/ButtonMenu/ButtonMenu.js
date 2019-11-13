import React from 'react';
import styled from 'styled-components';

const ButtonMenu = styled.button`{
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display:flex;
    align-self: flex-start;
    color: rgba(255, 255, 255, 0.5);
    &:focus{
        outline: none;
    };
        svg{
            margin-top: 2px;
            width:16px;
            &:hover{
                color: white; 
            }
        };
      
}`;

const Button = ({
                    sizing,
                    ...rest
                }) => (
    <ButtonMenu
        sizing={sizing}
        {...rest}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
            <path fill="currentColor" d="M55.636 250.364C24.907 250.364 0 275.27 0 306c0 30.73 24.907 55.636 55.636 55.636S111.273 336.73 111.273 306c0-30.73-24.907-55.636-55.637-55.636zm259.637 0c-30.73 0-55.636 24.907-55.636 55.636 0 30.729 24.907 55.636 55.636 55.636 30.729 0 55.636-24.905 55.636-55.636 0-30.73-24.906-55.636-55.636-55.636zm241.091 0c-30.73 0-55.636 24.907-55.636 55.636 0 30.729 24.906 55.636 55.636 55.636C587.093 361.636 612 336.73 612 306c0-30.73-24.907-55.636-55.636-55.636z"/>
        </svg>
    </ButtonMenu>
);


export default Button;
