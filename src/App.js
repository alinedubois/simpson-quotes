import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import QuoteCard from "./components/QuoteCard";


function App() {
  const [quote, setQuote] = useState({
    "quote": "Gah, stupid sexy Flanders!",
    "character": "Homer Simpson",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    "characterDirection": "Right"
  });

  function recupererCitation () {
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes")
        .then((resp) => resp.json())
        .then((data) => setQuote(data[0]));
  }
  return (
    <div className="App">
      <QuoteCard quote={quote.quote} character={quote.character} image={quote.image}/>
      <button onClick={recupererCitation}>Récuper citation</button>
    </div>
  );
}

export default App;
