import { ContainerPage } from "../../layouts/DefaultLayout/ContainerPage";
import { TitlePage } from "../../layouts/DefaultLayout/TitlePage";
import DataTableUser from "../../components/table/DataTableUser";
import {StyledH1} from  "./user.module.tsx";

export function User() {
  
  return (
    <ContainerPage>

      <TitlePage>
        <StyledH1>
        Usuários Cadastrados
<hr/>
        </StyledH1>
      </TitlePage> 
     
      <DataTableUser />
    </ContainerPage>
  );
}
