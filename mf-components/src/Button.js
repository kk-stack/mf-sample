import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 8px 12px;
    background: ${props => props.primary ? '#1338BE' : 'transparent'};
    outline: none;
    border: 1px solid #1338BE;
    color: ${props => props.primary ? 'white' : 'inherit'};

`;

const Button = (props) => <StyledButton {...props}></StyledButton>

export default Button;