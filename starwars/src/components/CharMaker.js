import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const CharStyled = styled.h1`
color: blue;
font-weight: 700;
`

const Character = (props) => {
  return <CharStyled>{props.name}</CharStyled>
}

export default Character