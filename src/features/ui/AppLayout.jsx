import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div
      className=" grid grid-rows-[auto_1fr_auto]
     h-screen "
    >
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll ">
        <main className="max-w-3xl mx-auto">
          <h1>Content</h1>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
