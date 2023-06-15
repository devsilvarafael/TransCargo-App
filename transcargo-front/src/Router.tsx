import { DefaultLayout } from "./layouts/DefaultLayout";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/login/SignIn";
import { User } from "./pages/user/User";
import { Home } from "./pages/home/Home";
import { Chargers } from "./pages/router/Chargers";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />}  >
        <Route path="/signin" element={<SignIn />} />   
      </Route>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/charge" element={<Chargers />} />
      </Route>

    
    </Routes>
  );
}
