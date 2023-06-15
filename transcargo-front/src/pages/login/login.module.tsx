import styled from "styled-components";

const Ground = styled.div`

  background: linear-gradient(to bottom, #b0adad, #da13da);
  background-size: 100% 100%;
`;



const Intro = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 100px;
  position: relative;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: space-between;
  padding: 30px 0;
  box-sizing: border-box;
`;

const IntroTitle = styled.div`
  display: grid;
  align-items: left;
  
  h1 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 10px;
    margin-left: 2rem;
    color:#353B41;
    font-family: "Arial", ;
  }

  `;

const IntroHeader = styled.div`
  display: flex;
  align-items: center;
  max-width: min-content;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${(props) => props.theme["white"]};
  box-shadow: 0px 2px 4px 1px ${(props) => props.theme["gray-100"]};

  cursor: default;
  position: absolute;
  top: 10px;
  left: 10px;

  transition: 0.5s;
  p {
    font-size: 2rem;
    letter-spacing: 3px;
    font-family: "Times New Roman", Times, serif, sans-serif;
  }

  &:hover {
    background-color: ${(props) => props.theme["gray-50"]};
  }

  svg {
    width: 40px;
    height: 40px;
  }
`;

const IntroMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  grid-column: 1;

  img {
    max-width: 550px;
  }
`;

// CONTAINER DO FORMULÁRIO
const FormContainer = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  background-color: #b63952;
  background: ${(props) => props.theme["white"]};
  box-shadow: 0px 0px 0px 2px ${(props) => props.theme["blue-500"]},
    0px 0px 4px 4px ${(props) => props.theme["gray-100"]};
  border-radius: 8px;
  padding: 20px 40px;
  margin: 0px 20px;

  h1 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 10px;
  }
`;

const FormInputs = styled.form`
  display: grid;
  gap: 20px;
  margin-top: 20px;
  align-items: center;

  input {
    height: 25px;
    padding: 10px 30px;
    min-width: 300px;
    font-size: 1.15rem;
    border-radius: 8px;
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme["blue-500"]};
    background-color: ${(props) => props.theme["gray-50"]};
    border: none;
  }

  button {
    height: 40px;
  padding: 10px 30px;
  min-width: max-content;
  border-radius: 8px;
  border: none;
  background-color: #644BC8;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  }

  a {
    text-decoration: none;
  }

  a,
  p {
    color: ${(props) => props.theme["gray-500"]};
    font-size: 1.1rem;
  }

  p + span {
    color: ${(props) => props.theme["red-500"]};
  }

  span {
    color: ${(props) => props.theme["blue-500"]};
  }
`;

export {
  Intro,
  IntroHeader,
  IntroMain,
  FormContainer,
  FormInputs,
  IntroContainer,
  IntroTitle,
  Ground,
};
