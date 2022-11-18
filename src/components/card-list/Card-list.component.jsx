import "./card-list.style.css";
import Card from "../card/Card.component";

const CardList = ({ users }) => {
  return (
    <div className="cardList_container">
      {users.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};

// import { Component } from "react";
// class CardList extends Component {
//   render() {
//     const { users } = this.props;
//     return (
//       <div className="cardList_container">
//         {users.map((user) => {
//           return <Card key={user.id} user={user} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
