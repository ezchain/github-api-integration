import { Card } from "react-bootstrap";
import "../styles/user-list-card.css";


function UserListCard(user) {
  return (
    <>

          <Card className="card">
            <Card.Img src={user.user.avatar_url} />
            <Card.Body>
              <Card.Title className="card-title">{user.user.login}</Card.Title>
            </Card.Body>
          </Card>
      
    </>
  );
}

export default UserListCard;
