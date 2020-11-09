import Header from "./components/Header/header.component";
import CardContainer from "./components/CardContainer/cardcontainer.component"

function App () {
  return (
    <div>
      <Header />
      <span className="updates">Sist oppdatert 9. november 2020</span>
      <CardContainer />
    </div>
  );
}

export default App;
