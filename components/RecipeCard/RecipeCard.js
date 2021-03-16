import Link from "next/link";
import RecipeCardStyled from "./RecipeCard.styled";

export default function RecipeCard(props) {
  return (
    <figure className="recipeCard">
      <style jsx>{RecipeCardStyled}</style>

      <Link href={props.link}>
        <a>
          <img className="recipeImg" src={props.img} />
        </a>
      </Link>
      <div className="recipeCategory">{props.category}</div>
      <figcaption className="recipeName">{props.name}</figcaption>
    </figure>
  );
}
