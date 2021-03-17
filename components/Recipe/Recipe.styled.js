import css from "styled-jsx/css";

export default css`
  .recipeBody {
    padding: 12px;
    max-width: 500px;
    margin: 0 auto;
  }
  .recipeName {
    text-align: center;
  }
  .recipeImg {
    width: 100%;
  }
  .recipeBody :global(h2) {
    color: #ff6a28;
  }
  .recipeBody :global(li) {
    padding: 4px;
  }
`;
