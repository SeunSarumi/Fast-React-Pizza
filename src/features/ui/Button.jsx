import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "inline-block px-4 py-3 font-semibold tracking-wide uppercase transition-all duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-300 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
