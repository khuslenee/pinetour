import { Destination, Footer, Price, Ready } from "./components";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Destination />
      <Price />
      <Ready />
      <Footer />
    </div>
  );
};
