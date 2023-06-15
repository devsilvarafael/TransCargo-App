import styled from "styled-components";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 20px;
  
`;

const ContainerTop = styled.div`
  display: grid;
  columns: 2;
`;

const CardsContainer = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr ;
  gap: 20px;
  margin-top: 10px;
  max-width: 30%;
`;

const Card = styled.div`
  display: grid;
  min-width: 60px;
  border-radius: 4px;
  margin-top: 5px;
  box-shadow: 0px 0px 2px 1px ${(props) => props.theme["gray-100"]};

  h2 {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px;
    background-color: ${(props) => props.theme["white"]};
    border-radius: 4px 4px 0px 0px;
    font-weight: 400;
    color: ${(props) => props.theme["gray-600"]};
    font-size: 0.65rem;
    font-weight: bold;
  }

  span {
    font-size: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme["gray-600"]};
  }
`;


const Data = styled.div`
  margin-left: 20px;
`;

const QuickAccessContainer = styled.div`
  grid-column: 1/-1;
  height: 100%;
  align-self: flex-start;
  display: flex;
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

const dicCardCollumn = styled.div`
  display: grid;  
  grid-template-columns: 1fr 1fr ;
  gap: 20px;
  margin-top: 20px;
  box-shadow: 0px 0px 2px 1px ${(props) => props.theme["gray-100"]};
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



export {
  HomeContainer,
  ContainerTop,
  CardsContainer,
  Card,
  Data,
  QuickAccessContainer,
  QuickAcessButton,
  imageStyled,
  PequisarInput,
  dicCardCollumn,
  StyledH1,
};
