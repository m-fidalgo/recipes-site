import { useState, useEffect, useMemo } from "react";
import { RecipeService } from "../../services/RecipeService";
import { CategoryService } from "../../services/CategoryService";
import Head from "next/head";
import {
  Paper,
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
    return CategoryService.get(recipeList);
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
      <Paper
        style={{ margin: "24px auto", maxWidth: "800px", padding: "12px" }}
      >
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
      </Paper>
    </div>
  );
}
