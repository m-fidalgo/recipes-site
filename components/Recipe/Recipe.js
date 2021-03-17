import RecipeStyled from "./Recipe.styled";

export default function Recipe(props) {
  return (
    <article className="recipeBody">
      <style jsx>{RecipeStyled}</style>

      <h1 className="recipeName">{props.name}</h1>
      <img className="recipeImg" alt={props.name} src={props.img} />

      <div>
        <p>
          <i className="fas fa-stopwatch fa-fw" /> Preparo: {props.time}
        </p>
        <p>
          <i className="fas fa-utensils fa-fw" /> Rendimento: {props.servings}
        </p>
      </div>
      {props.children}
    </article>
  );
}
