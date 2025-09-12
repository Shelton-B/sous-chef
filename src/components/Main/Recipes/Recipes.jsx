import "./Recipes.css";
import "../Recipes/RecipeCard/RecipeCard";
import RecipeCard from "../Recipes/RecipeCard/RecipeCard";

function Recipes() {
  return (
    <div className="recipes__container">
      <RecipeCard></RecipeCard>
    </div>
  );
}

export default Recipes;
