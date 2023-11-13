import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { RoofField } from "../components/RoofField";

export const AddProperty = () => {
  // Below is related to auth for updating the user. Will implement later. Review 'Adding JWTs to the User Info Page.'
  // const user = useUser();
  // const[,setToken] = useToken();
  // const { id, email, info } = user;

  const { register, handleSubmit } = useForm();

  const [propertyType, setPropertyType] = useState("Apartment");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container className="container main">
      <h1 className="mb-3 blue-header">Add a Property</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="container w-50 justify-content-center">
        <Form.Group className="mb-3">
          <Form.Label className="blue-text" htmlFor="address">
            Property Address:{" "}
          </Form.Label>
          <Form.Control
            type="address"
            placeholder="20 Fake Pl."
            id="address"
            {...register("address", { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="blue-text" htmlFor="city">
            Property City:{" "}
          </Form.Label>
          <Form.Control
            type="city"
            placeholder="Exampleville"
            id="city"
            {...register("city", { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="blue-text" htmlFor="province">
            Property Province:{" "}
          </Form.Label>
          <Form.Select
            id="province"
            {...register("province", { required: true })}
          >
            <option value={"AB"}>AB</option>
            <option value={"BC"}>BC</option>
            <option value={"MB"}>MB</option>
            <option value={"NL"}>NL</option>
            <option value={"NS"}>NS</option>
            <option value={"NT"}>NT</option>
            <option value={"NU"}>NT</option>
            <option value={"ON"}>ON</option>
            <option value={"PE"}>PE</option>
            <option value={"QC"}>QC</option>
            <option value={"SK"}>SK</option>
            <option value={"YT"}>YT</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="blue-text" htmlFor="type">
            Property Type:{" "}
          </Form.Label>
          <Form.Control as={"select"} value={propertyType} onChange={(e) => setPropertyType(e.target.event)} id="type" {...register("type", { required: true })}>
            <option value="Apartment">Apartment</option>
            <option value="Cabin">Cabin</option>
            <option value="Condo">Condo</option>
            <option value="Home">Home</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="blue-text" htmlFor="carpet">
              Carpet:{" "}
          </Form.Label>
          <Form.Select id="carpet" {...register("carpet", { required: true })}>
              <option value={"No"}>No</option>
              <option value={"Yes"}>Yes</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="blue-text" htmlFor="pets">
              Pets:{" "}
          </Form.Label>
          <Form.Select id="pets" {...register("pets", { required: true })}>
              <option value={"No"}>No</option>
              <option value={"Yes"}>Yes</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="blue-text" htmlFor="heating">
              Heating Type:{" "}
          </Form.Label>
          <Form.Select
              id="heating"
              {...register("heating", { required: true })}
          >
              <option value={"Electric"}>Electric</option>
              <option value={"Oil"}>Oil</option>
          </Form.Select>
        </Form.Group>

        <hr></hr>

        <Button type="submit" className="green-button">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
