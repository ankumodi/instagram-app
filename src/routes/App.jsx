import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((Store) => Store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
    </>
  );
}

export default App;
