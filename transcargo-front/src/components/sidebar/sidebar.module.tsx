import styled from "styled-components";

const SidebarContainer = styled.div`
  flex: 1;
  border-right: 0.5px solid ${(props) => props.theme["gray-100"]};
  min-height: 100vh;
  background-color: ${(props) => props.theme["white"]};
  position: fixed;
  z-index: 2;

  .center {
    padding-left: 20px;
    padding-right: 20px;

    ul {
      list-style: none;
      padding: 0px;

      .title {
        color: ${(props) => props.theme["gray-400"]};
        margin-top: 30px;
        margin-bottom: 10px;
      }

      li {
        display: flex;
        align-items: center;
        padding: 6px 25px;
        transition: 0.2s;
        border-radius: 8px;
        width: 150px;

        cursor: pointer;

        &:hover,
        &::selection {
          background-color: ${(props) => props.theme["blue-300"]};
        }

        .icon {
          font-size: 24px;
          color: ${(props) => props.theme["gray-600"]};
        }

        span {
          font-size: 1rem;
          font-weight: 400;
          color: ${(props) => props.theme["gray-600"]};
          margin-left: 10px;
        }
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    margin: 10px;

    .colorOption {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      border: 1px solid #7451f8;
      cursor: pointer;
      margin: 5px;

      &:nth-child(1) {
        background-color: whitesmoke;
      }
      &:nth-child(2) {
        background-color: #333;
      }
      &:nth-child(3) {
        background-color: darkblue;
      }
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: max-content;
  padding: 0px 20px;
  gap: 10px;

  svg {
    width: 35px;
    height: 35px;
  }
`;

const Logo = styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme["gray-600"]};
  letter-spacing: 1.5px;
  font-family: "Playfair Display";
`;



const Exit = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  padding: 6px 25px;
  transition: 0.2s;
  border-radius: 8px;
  width: 150px;


  cursor: pointer;

  .icon {
    font-size: 24px;
    color: ${(props) => props.theme["gray-600"]};
  }
`;


export { SidebarContainer, LogoContainer, Logo, Exit };
