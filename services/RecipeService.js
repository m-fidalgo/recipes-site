import { ApiService } from "./ApiService";

const endpoint = "recipe";

export const RecipeService = {
  get(id) {
    return ApiService.get(`${endpoint}?id=${id}`);
  },
  listAll() {
    return ApiService.get(endpoint);
  },
  create(newRecipe) {
    return ApiService.post(endpoint, newRecipe);
  },
  remove(id) {
    return ApiService.delete(`${endpoint}?id=${id}`);
  },
};
