import slugify from "slugify";
import { RecipeService } from "../../../services/RecipeService";
import { CategoryService } from "../../../services/CategoryService";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import RecipeCategory from "../../../components/RecipeCategory/RecipeCategory";

export async function getStaticPaths() {
  const recipes = await RecipeService.listAll();
  const categories = CategoryService.get(recipes);

  const paths = categories.map((category) => {
    return {
      params: {
        category: slugifyText(category),
      },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { category } = context.params;
  const recipes = (await RecipeService.listAll()).filter(
    (recipe) => slugifyText(recipe.category) === category
  );

  return {
    props: {
      recipes,
    },
  };
}

function slugifyText(text) {
  return slugify(text).toLowerCase();
}

export default function RecipeCategoryPage(props) {
  const recipes = props.recipes || [];
  const category = recipes[0].category;

  if (recipes.length === 0) {
    return <div>Nenhuma Receita</div>;
  }

  return (
    <div>
      <Header title={`Treinacook - ${category}`} />
      <RecipeCategory recipeList={recipes} category={category} />
      <Footer />
    </div>
  );
}
