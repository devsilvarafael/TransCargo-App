import { Link } from "react-router-dom";
import {

  Exit,
  SidebarContainer,
} from "./sidebar.module";
import SVGdraw from "../../assets/Logo.svg";
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import EditIcon from '@mui/icons-material/Edit';

export function Sidebar() {
  return (
    <SidebarContainer>
      <Link to="/home" style={{ textDecoration: "none" }}> 
        <img  src={SVGdraw} alt="" />
      </Link>
      <div className="center">
        
      <ul>
          <hr/>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li>
              <HomeIcon className="icon" />
              <span>DashBoard</span>
            </li>
          </Link>

          <Link to="/charge" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Rotas</span>
            </li>
          </Link>
         
         
          
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <EditIcon className="icon" />
              <span>Gerenciar</span>
            </li>
          </Link>
        </ul>
      </div>

<div className="divFinal">
      <Link to="/signin" style={{ textDecoration: "none" }}>
        <Exit>
          <ExitToAppIcon className="icon" />
          <span>Sair</span>
        </Exit>
      </Link>
</div>
    </SidebarContainer>
  );
}
