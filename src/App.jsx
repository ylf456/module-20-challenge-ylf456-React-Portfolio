import { Outlet } from "react-router-dom";
// import Nav bar or header bar
// import footer bar
import Nav from "./UI/navbar/navbar";
import Footer from "./UI/footer/footer";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />     
    </>
  );
}

export default App;