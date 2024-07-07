import { Outlet } from "react-router-dom";
import CartOverview from "../cart/CartOverview";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <h1>content</h1>
        <Outlet />
      </main>
      
      <CartOverview />
    </div>
  );
}

export default AppLayout;
