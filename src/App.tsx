import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/useTransition"}>UseTransition</Link>
          </li>
          <li>
            <Link to={"/useTransitionInput"}>UseTransitionInput</Link>
          </li>
          <li>
            <Link to={"/useTransitionAwait"}>UseTransitionAwait</Link>
          </li>
          <li>
            <Link to={"/use"}>Use</Link>
          </li>
          <li>
            <Link to={"/usePromise"}>UsePromise</Link>
          </li>
          <li>
            <Link to={"/usePrePromise"}>UsePrePromise</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
