import styled from "styled-components";

export const SignInHeader = styled.h1`
  margin: 50px;
  justify-content: center;
  text-align: center;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: auto;
  padding: 20px;

  h3 {
    text-align: center;
    padding: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  width: 85%;

  label {
    padding: 5px 0;
  }

  input {
    height: 10px;
    border-radius: 10px;
    padding: 10px;
  }
`;

export const SignInButton = styled.button`
  margin: auto;
  padding: 5px;
  border-radius: 10px;
  margin-top: 20px;
`;
