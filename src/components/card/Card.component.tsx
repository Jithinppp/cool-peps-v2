import { Peps } from "../../App";
import "./card.style.css";

type UserProps = {
  user: Peps;
};

const Card = ({ user }: UserProps) => {
  const { name, website } = user;
  return (
    <div className="card_container">
      <h1 className="card_title">{name}</h1>
      <p className="card_subtitle">{website}</p>
      <div className="avatar_container">
        <img
          className="avatar"
          src={`https://avatars.dicebear.com/api/adventurer/:${name}.svg`}
          alt="user avatar"
        ></img>
      </div>
    </div>
  );
};

// import { Component } from "react";
// class Card extends Component {
//   render() {
//     const { name, website } = this.props.user;
//     return (
//       <div className="card_container">
//         <h1 className="card_title">{name}</h1>
//         <p className="card_subtitle">{website}</p>
//         <div className="avatar_container">
//           {/* https://avatars.dicebear.com/api/micah/:aj.svg */}
//           <img
//             className="avatar"
//             src={`https://avatars.dicebear.com/api/adventurer/:${name}.svg`}
//             alt="user avatar"
//           ></img>
//         </div>
//       </div>
//     );
//   }
// }

export default Card;
