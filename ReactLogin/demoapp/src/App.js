import "./App.css";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import Sign from "./Pages/Sign";
import Signup from "./Pages/Signup";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <Footer />
      {/* <Sign /> */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;
