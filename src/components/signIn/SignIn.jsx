import { SignInHeader, SignInForm } from "./signIn.styles"

function SignIn() {

  return (
    <div>
        <SignInHeader>Workflow Management Application</SignInHeader>
      <SignInForm action="">
        <h3>Welcome</h3>
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Password</label>
        <input type="password" />
      </SignInForm>
    </div>
  )
}

export default SignIn
