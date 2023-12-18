import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { PasswordResetLandingModal } from "./PasswordResetLandingModal";

export const ForgotPasswordModal = ({ show, setShow }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPasswordResetLandingModal, setShowPasswordResetLandingModal] =
    useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const submitTimeout = () => {
    const timeout = setTimeout(() => {
      setShowPasswordResetLandingModal(true);
      handleClose();
    }, 3000);
    return () => clearTimeout(timeout);
  };

  const handleSubmitClicked = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/forgotPassword/${emailValue}`);
      setSuccess(true);
      submitTimeout();
    } catch (e) {
      setErrorMessage(e);
    }
  };

  return success ? (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="blue-text"> Success </Modal.Title>
        </Modal.Header>
        <Modal.Body className="blue-text">
          A reset link has been sent to you email.
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <PasswordResetLandingModal
        show={showPasswordResetLandingModal}
        setShow={setShowPasswordResetLandingModal}
        emailValue={emailValue}
      />
    </>
  ) : (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="blue-text">Forgot Password</Modal.Title>
        </Modal.Header>
        <Form
          onSubmit={handleSubmitClicked}
          className="container w-50 justify-content-center"
        >
          <Modal.Body className="blue-text">
            Enter your email and we'll send a reset link.
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <Form.Group className="mb-3">
              <Form.Label className="blue-text" htmlFor="emailValue">
                Email:{" "}
              </Form.Label>
              <Form.Control
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                placeholder="email@email.com"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              className="green-button mx-3"
              disabled={!emailValue}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
