import "./Main.css";
import Searchbar from "./Searchbar/Searchbar";

function Main() {
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="main">
      <Searchbar
        setLoading={setLoading}
        setHasSearched={setHasSearched}
        setRecipes={setRecipes}
      ></Searchbar>
    </div>
  );
}

export default Main;
