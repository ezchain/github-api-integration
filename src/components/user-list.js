import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import UserListCard from "./user-list-card";
import "../styles/user-list-card.css";
import * as usersService from "../services/users-service";
class UserList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Row className="page-container">
          <Col>
            <Form.Label>Find users in github!</Form.Label>
            <Form.Control type="text" id="input" onChange={this.getUsers} />
          </Col>
        </Row>
        <Row className="cards-container">{this.renderCards()}</Row>
      </>
    );
  }

  getUsers = async (event) => {
    if (event == undefined) return;
    var users = await usersService.getUsers(event.target.value);
    this.setState({ users });
  };

  renderCards() {
    if (this.state != null) {
      var users = this.state.users;
      return users.map((user, index) => (
        <Col>
          <UserListCard user={user} />
        </Col>
      ));
    }
  }


}

export default UserList;
