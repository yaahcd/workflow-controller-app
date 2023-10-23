import styled from "styled-components";

export const SignInHeader = styled.h1`
margin: 50px;
justify-content: center;
text-align: center;
`

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

label {
    justify-content: start;
    margin-left: 130px;
    padding: 10px 0 5px 0
}

input {
    width: 60%;
    margin: auto;
    align-items: center;
    justify-content: center;
}
`