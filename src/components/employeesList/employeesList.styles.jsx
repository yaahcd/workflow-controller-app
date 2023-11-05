import styled from "styled-components";

export const EmployeesListContainer = styled.div`
background-color: #A8DADC;
display: flex;
justify-content center;
align-items: start;
margin: auto;
width: 85vw;
border: 1px solid #1D3557;
border-radius: 5px;
padding: 20px;

section {
    width: 50%
}

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
  background-color: #457b9d;
  border: 1px solid #1d3557;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  border-radius: 10px;
  color: white;
  margin: 10px;
  cursor: pointer;
  transition: 0.7s ease;

  &:hover {
    background-color: #1d3557;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%

  margin: 10px;
`;

export const EmployeeListButton = styled.button`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  padding: 15px;
  border: 1px solid #1d3557;
  border-radius: 10px;
  background-color: #457b9d;
  color: white;
  font-size: 20px;
  text-shadow: 1px 0px 1px rgba(128, 0, 0, 1);
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  height: 80px;
  width: 50vw;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.01);
  }
`;
