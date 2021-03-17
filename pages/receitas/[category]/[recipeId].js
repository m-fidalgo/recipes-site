import slugify from "slugify";
import { RecipeService } from "../../../services/RecipeService";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Recipe from "../../../components/Recipe/Recipe";

export async function getStaticPaths() {
  const recipes = await RecipeService.listAll();

  const paths = recipes.map((recipe) => {
    return {
      params: {
        category: slugifyText(recipe.category),
        recipeId: `${slugifyText(recipe.name)}-${recipe.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const recipeId = context.params.recipeId.substring(
    context.params.recipeId.lastIndexOf("-") + 1
  );
  const recipe = await RecipeService.get(recipeId);

  return {
    props: {
      recipe,
    },
  };
}

function slugifyText(text) {
  return slugify(text).toLowerCase();
}

export default function RecipeContainer({ recipe }) {
  return (
    <div>
      <Header title={`Treinacook - ${recipe.name}`} />
      <Recipe
        name={recipe.name}
        img={recipe.img}
        time={recipe.time}
        servings={recipe.servings}
      >
        <h2>Ingredientes</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2>Modo de Preparo</h2>
        <ol>
          {recipe.directions.map((direction, index) => (
            <li key={index}>{direction}</li>
          ))}
        </ol>
      </Recipe>
      <Footer />
    </div>
  );
}
