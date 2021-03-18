import css from "styled-jsx/css";

export default css`
  .recipeCategory {
    padding: 8px 16px;
  }
  .titleContainer {
    text-align: center;
  }
  .categoryName {
    color: #fb9aa8;
  }
  .recipes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 16px;
  }
`;
