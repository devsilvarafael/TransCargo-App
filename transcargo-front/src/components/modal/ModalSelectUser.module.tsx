import styled from "styled-components";

const ModalUserContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 10px;
`;

const ModalSelectTypeUser = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 10px;
  margin: 5px;
  gap: 10px;
  columns: 3;

 
`;

const ModalConfirmAndCancel = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 10px;
  margin: 5px;
`;



export { ModalUserContainer, ModalSelectTypeUser,ModalConfirmAndCancel };
