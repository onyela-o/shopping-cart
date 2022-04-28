import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import inventory from "./inventory";

function createCard(card) {
  return <Card title={card.title} description={card.description} />;
}

function App() {
  return (
    <div className="App">
      <Header />
      {inventory.map(createCard)}
    </div>
  );
}

export default App;
