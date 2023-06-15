import styled from "styled-components";

const StyledImage = styled.img`
  width: 50%;  
  
  margin-left: 25rem;

`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  gap: 20px;
  margin-top: 10px;
  max-width: 30%;
  
  
`;

const QuickAcessButton = styled.div`
  min-height: 100px;
  width: 150px;
  margin-top: 20px;
  box-shadow: 0px 0px 2px 1px ${(props) => props.theme["gray-100"]};
  background-color: ${(props) => props.theme["blue-400"]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  
`;


const imageStyled = styled.div`
  min-height: 100px;
  width: 150px;
  margin-top: 20px;
  box-shadow: 0px 0px 2px 1px ${(props) => props.theme["gray-100"]};
  background-color: ${(props) => props.theme["blue-400"]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  
  
`;

const PequisarInput = styled.div`
  min-height: 100px;
  border-radius: 8px;;
`;

const StyledH1 = styled.h1`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 41px;
letter-spacing: 0.25px;
color: #505862;
 
`;

const InputStyled = styled.input`
  padding: 10px; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
  font-size: 16px; 
  color: #333; 
  
  background-color: #f4f4f4; 
`

const InputCartStyledH4 = styled.h4`
color: #9a9494;
font-family: 'Inter';
font-style: normal;

text-align: left;
`
const InputCartStyledH2 = styled.h2`
color: #000000;
font-family: 'Inter';
font-style: normal;
text-align: left;
margin-top: 5px;

`

export {
  CardsContainer,
  QuickAcessButton,
  imageStyled,
  PequisarInput,
  StyledH1,
  StyledImage,
  InputStyled,
  InputCartStyledH2,
  InputCartStyledH4,
 
};
