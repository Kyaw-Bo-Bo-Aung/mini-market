import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { UserContext } from "../context/UserProvider";
import { useContext, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";

const RootLayout = () => {
  const { handleUsers } = useContext(UserContext);
  const {data} = useFetchData('https://dummyjson.com/users');
  
  useEffect(() => {
    handleUsers(data);
  }, [data])

  return (
    <>
      <NavBar />
      <Outlet className="container" />
    </>
  );
}

export default RootLayout;
