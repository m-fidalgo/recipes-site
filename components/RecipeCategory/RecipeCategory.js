import Link from "next/link";
import slugify from "slugify";
import RecipeCategoryStyled from "./RecipeCategory.styled";
import RecipeCard from "../RecipeCard/RecipeCard";

function slugifyText(text) {
  return slugify(text).toLowerCase();
}

function createUrl(recipe) {
  const category = slugifyText(recipe.category);
  const recipeName = slugifyText(recipe.name);

  return `/receitas/${category}/${recipe.id}-${recipeName}`;
}

export default function RecipeCategory(props) {
  const maxElements = props.maxElements || 3;
  const recipes = props.recipeList
    .filter((recipe) => recipe.category === props.category)
    .slice(0, maxElements);

  return (
    <div className="recipeCategory">
      <style jsx>{RecipeCategoryStyled}</style>

      <Link href={`/receitas/${slugifyText(props.category)}`}>
        <a>
          <h2 className="categoryName">{props.category}</h2>
        </a>
      </Link>

      <div className="recipes">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            link={createUrl(recipe)}
            category={recipe.category}
            name={recipe.name}
            img={recipe.img}
          />
        ))}
      </div>
    </div>
  );
}