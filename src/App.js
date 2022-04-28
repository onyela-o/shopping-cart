import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card"
function App() {
  return (
    <div className="App">
      <Header />
      <Card title="Apples" description="A packet of delicious apples"/> 
      <Card title="Bananas" description="A bunch of delicious bananas"/> 
    </div>
  );
}

export default App;
