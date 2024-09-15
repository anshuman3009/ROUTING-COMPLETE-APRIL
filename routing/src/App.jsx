import { Outlet } from "react-router-dom";
import Header from "./Header";

function App()
{
  return(
    <>
    <h1>HELLO I AM APP</h1>
    <Header></Header>
    <Outlet></Outlet>
    <h2>HELLO I AM FOOTER</h2>
    </>
  )
}

export default App;