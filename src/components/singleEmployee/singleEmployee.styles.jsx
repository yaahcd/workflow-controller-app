import styled from "styled-components";

export const EmployeeDetailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 75vw;
  margin: auto;
  background-color: #dee2e6;
  border: 1px solid #adb5bd;
  border-radius: 5px;
  position: relative;

  h3 {
    font-family: "Kite One";
    font-size: 30px;
    padding: 20px;
  }

  span {
    font-weight: 600;
  }
`;

export const ButtonContainer = styled.div`
position: absolute;
left: 0;
bottom: 0;
margin: 15px;
`

export const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  padding: 10px;

  p {
    font-size: 18px;
    padding: 5px;
  }
`;

export const JobsAssignedContainer = styled.div`
  padding: 10px;
  width: 50%;

  p {
    font-size: 18px;
    padding: 5px;
  }
`;

export const JobBlock = styled.div`
  margin-bottom: 30px;
`;
