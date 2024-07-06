import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Package from "./pages/package/package";
import WhatsappFloat from "./components/whatsapp-float/whatsapp-float";
import PhotoGalery from "./pages/photo-galery/photo-galery";
import Reservation from "./pages/reservation/reservation";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <Package />
      <Reservation />
      <PhotoGalery />
      <Footer />
      <WhatsappFloat />
    </div>
  );
}

export default App;
