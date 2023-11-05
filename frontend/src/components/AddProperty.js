import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useToken } from "../auth/useToken";
import { useUser } from "../auth/useUser";
import axios from "axios";

export const AddProperty = () => {
  // Below is related to auth for updating the user. Will implement later. Review 'Adding JWTs to the User Info Page.'
  // const user = useUser();
  // const[,setToken] = useToken();
  // const { id, email, info } = user;

  return (
    <Container className="container w-75 main">
      <h1 className="mb-3 blue-header">Add a Property</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="blue-text">Property Address: </Form.Label>
          <Form.Control type="address" placeholder="20 Fake Pl." />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="blue-text">Property City: </Form.Label>
          <Form.Control type="city" placeholder="Exampleville" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="blue-text">
            Property State/Province:{" "}
          </Form.Label>
          <Form.Control type="stprov" placeholder="EX" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="blue-text">Property Type: </Form.Label>
          <Form.Control type="type" placeholder="Condo" />
        </Form.Group>

        <Button type="submit" className="green-button">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
