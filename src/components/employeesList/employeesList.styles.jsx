import styled from "styled-components";

export const EmployeesListContainer = styled.div`
background-color: #A8DADC;
display: flex;
flex-direction: column;
justify-content center;
align-items: start;
margin: auto;
width: 85vw;
position: relative;
border: 1px solid #1D3557;
border-radius: 5px;
padding: 20px;

h3 {
    font-family: 'Kite One';
    font-size: 30px;
    margin: 20px;
}

p {
    margin: 10px;
    cursor: pointer;
    border: none;
    font-size: 18px;

    &:hover {
        font-weight: 700;
    }
}
`;

export const SingleEmployeeContainer = styled.div`
width: 15vw;
text-align: center;
background-color: #457B9D;
border: 1px solid #1D3557;
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
border-radius: 10px;
color: white;
margin: 5px;
cursor: pointer;
transition: .7s ease;

&:hover {
    background-color: #1D3557;
}
`

export const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  margin: 10px;
`;
