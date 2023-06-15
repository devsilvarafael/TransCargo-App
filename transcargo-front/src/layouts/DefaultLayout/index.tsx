import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";

import { List, ListContainer } from "./list.module";

export function DefaultLayout() {
  return (
    <div>
      <div>
        <List>
          <Sidebar />
          <ListContainer> 
            <Outlet />
          <hr/>      
          </ListContainer>
        </List>
      </div>
    </div>
  );
}
