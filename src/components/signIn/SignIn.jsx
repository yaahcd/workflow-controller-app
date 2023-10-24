import {
  SignInHeader,
  SignInForm,
  InputContainer,
  SignInButton,
} from "./signIn.styles";
import { Outlet } from "react-router-dom";

function SignIn() {
  return (
    <>
      <SignInHeader>Workflow Management Application</SignInHeader>
      <SignInForm action="">
        <h3>Welcome</h3>
        <InputContainer>
          <label htmlFor="">Email</label>
          <input type="email" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="">Password</label>
          <input type="password" />
        </InputContainer>
        <SignInButton>Sign in</SignInButton>
      </SignInForm>
      <Outlet />
    </>
  );
}

export default SignIn;
