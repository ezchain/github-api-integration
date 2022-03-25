import { Container, Row, Col } from "react-bootstrap";
import UserList from "../components/user-list";
function Detail() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <UserList />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
  
  export default Detail;