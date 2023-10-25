import styled from "styled-components";

export const EmployeeDetailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 75%;
  margin: auto;
  border: 1px solid black;

  h3 {
    padding: 20px;
  }

  span {
    font-weight: 600;
  }
`;

export const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid black;
  padding: 10px;

  p {
    padding: 5px;
  }
`;

export const JobsAssignedContainer = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 50%;

  p {
    padding: 5px;
  }
`;

export const JobBlock = styled.div`
margin-bottom: 30px;
`
