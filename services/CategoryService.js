export const CategoryService = {
  get(recipes) {
    const categoriesList = {};

    recipes.forEach((recipe) => {
      categoriesList[recipe.category] = true;
    });

    return Object.keys(categoriesList).sort();
  },
};
