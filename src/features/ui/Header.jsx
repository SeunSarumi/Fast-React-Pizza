import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import Username from "../user/Username";

function Header() {
  return (
    <header className="px-4 py-3 uppercase bg-yellow-500 border-b border-stone-200">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
