
import { ContainerPage } from "../../layouts/DefaultLayout/ContainerPage.tsx";
import { TitlePage } from "../../layouts/DefaultLayout/TitlePage.tsx";
import DataTableCharge from "../../components/table/DataTableRoutes.tsx";
import {StyledH1} from  "./charge.module.tsx"

export function Chargers() {
  return (
    <ContainerPage>
      <TitlePage>
      <StyledH1>
        Carga
      </StyledH1>
      <hr/>
      </TitlePage> 
     
      <DataTableCharge />
    </ContainerPage>
  );
  
}
