
import { ContainerPage } from "../../layouts/DefaultLayout/ContainerPage.tsx";
import { TitlePage } from "../../layouts/DefaultLayout/TitlePage.tsx";
import imagem from "../../assets/caminhao.jpg";
import { Button, Card } from "@mui/material";
import { PequisarInput, StyledImage, InputStyled, StyledH1, CardsContainer, InputCartStyledH2, InputCartStyledH4 } from "./home.module.tsx";
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import {ModalDialogCreateRouterTrunck} from "../../components/modal/ModalRouterCreate.tsx";
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
         
<ModalDialogCreateRouterTrunck/>

          <CardsContainer>
            <Card>
              <InputCartStyledH4>
                N° Conhecimento
                <InputCartStyledH2>
                DF-145009SC
              </InputCartStyledH2>
              </InputCartStyledH4>
              <hr />

              <div>
              
                <CallMissedOutgoingIcon/>
                <h1>
                  Avenida Paulista, 1000
                  <h3>
                    São Paulo - SP
                  </h3>
                </h1>
                <hr/>
                <KeyboardReturnIcon/>
                <h1>
                <h1>
                  Pindamanhagaba, 100
                  <h3>
                    São Paulo - SP
                  </h3>
                </h1>
                </h1>
              </div>
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
