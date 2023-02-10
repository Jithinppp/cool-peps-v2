import "./card-list.style.css";
import Card from "../card/Card.component";
import { Peps } from "../../App";

type UserProps = {
  users: Peps[];
};

const CardList = ({ users }: UserProps) => {
  return (
    <div className="cardList_container">
      {users.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};

export default CardList;
