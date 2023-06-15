
import { ContainerPage } from "../../layouts/DefaultLayout/ContainerPage.tsx";
import { TitlePage } from "../../layouts/DefaultLayout/TitlePage.tsx";
import imagem from "../../assets/caminhao.jpg";
import { Card } from "@mui/material";
import { PequisarInput, StyledImage, InputStyled, StyledH1, CardsContainer, InputCartStyledH2, InputCartStyledH4 } from "./home.module.tsx";

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
          <InputStyled
            placeholder="Pesquisar" >
          </InputStyled>
          <CardsContainer>
            <Card>
              <InputCartStyledH4>
                N° Conhecimento
                <InputCartStyledH2>
                DF-145009SC
              </InputCartStyledH2>
              </InputCartStyledH4>
              <hr />

              
            </Card>
          </CardsContainer>
          <hr />
          <div>
            <StyledImage src={imagem} alt="Descrição da imagem" />

          </div>

        </div>

      </PequisarInput>


    </ContainerPage>
  );
}
