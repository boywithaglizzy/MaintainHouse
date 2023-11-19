import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

export const PleaseVerifyEmailPage = () => {
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");

  useEffect(() => {
    setTimeout(() => {
      navigate(`/verifyEmail?email=${encodeURIComponent(email)}`);
    }, 3000);
  }, [navigate, email]);

  return (
    <Container className="container main">
      <h1>Thanks for signing up!</h1>
      <p>
        A verification email has been sent to the email address provided. Please
        verify your email.
      </p>
    </Container>
  );
};