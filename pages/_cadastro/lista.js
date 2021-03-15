import { useState, useEffect, useMemo } from "react";
import { RecipeService } from "../../services/RecipeService";
import Head from "next/head";
import {
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

export default function Lista() {
  const [recipeList, setRecipeList] = useState([]);
  const categoryList = useMemo(() => {
    const categories = {};
    recipeList.forEach((recipe) => (categories[recipe.category] = true));
    return Object.keys(categories).sort();
  }, [recipeList]);

  useEffect(() => {
    async function getRecipes() {
      const recipes = await RecipeService.listAll();
      setRecipeList(recipes);
    }

    getRecipes();
  }, []);

  async function removeRecipe(id) {
    await RecipeService.remove(id);
    const newRecipeList = recipeList.filter((recipe) => recipe.id !== id);
    setRecipeList(newRecipeList);
  }

  return (
    <div>
      <Head>
        <title>Lista de Receitas</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        ></link>
      </Head>

      <h1>Lista de Receitas</h1>

      <List>
        {categoryList.map((category) => (
          <ListItem key={category}>
            <List>
              <ListSubheader>{category}</ListSubheader>

              {recipeList
                .filter((recipe) => recipe.category === category)
                .map((recipe) => (
                  <ListItem key={recipe.id}>
                    <ListItemText primary={recipe.name} />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        color={"secondary"}
                        onClick={() => removeRecipe(recipe.id)}
                      >
                        X
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
            </List>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
