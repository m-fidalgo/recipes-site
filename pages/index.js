import { useMemo } from "react";
import { RecipeService } from "../services/RecipeService";
import { CategoryService } from "../services/CategoryService";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RecipeCategory from "../components/RecipeCategory/RecipeCategory";

export async function getStaticProps(context) {
  const totalItems = 20;
  const recipes = (await RecipeService.listAll()).slice(0, totalItems);

  return {
    props: {
      recipes,
    },
  };
}

export default function Home({ recipes }) {
  const categories = useMemo(() => {
    return CategoryService.get(recipes);
  }, [recipes]);

  return (
    <div>
      <Header title="Receitas" />
      {categories.map((category) => (
        <RecipeCategory
          key={category}
          recipeList={recipes}
          category={category}
        />
      ))}
      <Footer />
    </div>
  );
}
