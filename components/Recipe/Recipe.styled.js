import css from "styled-jsx/css";

export default css`
  .recipeBody {
    padding: 12px;
    max-width: 500px;
    margin: 0 auto;
  }
  .recipeName {
    text-align: center;
    color: #fb9aa8;
  }
  .recipeImg {
    width: 100%;
  }
  .recipeBody :global(h2) {
    color: #fb9aa8;
  }
  .recipeBody :global(li) {
    padding: 4px;
  }
`;
