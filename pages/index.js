import { useState, useEffect } from "react";
import { RecipeService } from "../services/RecipeService";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RecipeCard from "../components/RecipeCard/RecipeCard";

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const recipes = await RecipeService.listAll();
      setList(recipes);
    }

    getRecipes();
  }, []);

  return (
    <div>
      <Header title="Treinacook" />
      {list.map((item) => (
        <RecipeCard
          key={item.id}
          link={"/"}
          category={item.category}
          name={item.name}
          img={item.img}
        />
      ))}

      <Footer />
    </div>
  );
}
