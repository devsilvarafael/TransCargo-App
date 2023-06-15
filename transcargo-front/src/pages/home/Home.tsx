
import { ContainerPage } from "../../layouts/DefaultLayout/ContainerPage.tsx";
import { TitlePage } from "../../layouts/DefaultLayout/TitlePage.tsx";
import imagem from "../../assets/caminhao.jpg";
import styled from "styled-components";
import { Card } from "@mui/material";
import { PequisarInput, dicCardCollumn, StyledH1, CardsContainer } from "./home.module.tsx";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  margin-top: 10px;
 

`;

const StyledImage = styled.img`
   
`;

export function Home() {
  return (
    <ContainerPage>
      <TitlePage>
        <StyledH1>
          ROTAS DE ENTREGAS
        </StyledH1>
      </TitlePage>
      <hr />

      <PequisarInput>
        <div>
          <h1>
            Rotas
          </h1>
          <input type="text" placeholder="Pesquisar" />
          <CardsContainer>

            <Card>
              <h2>
  ENTREGA
              </h2>
              <span>90</span>
            </Card>

          </CardsContainer>
          <hr/>
          <div>
              <StyledImage src={imagem} alt="Descrição da imagem" />

            </div>

        </div>

      </PequisarInput>


    </ContainerPage>
  );
}
