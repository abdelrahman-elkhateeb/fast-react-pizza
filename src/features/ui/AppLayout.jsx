import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../cart/CartOverview";
import Header from "./Header";
import Loading from "./Loading";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid-row[auto_1fr_auto] grid h-screen">
      {isLoading && <Loading />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <h1>content</h1>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
