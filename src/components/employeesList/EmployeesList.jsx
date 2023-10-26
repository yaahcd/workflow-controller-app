import {
  ButtonContainer,
  EmployeesListContainer,
} from "./employeesList.styles";
import { useNavigate } from "react-router-dom";
import { employees } from "../../../employeeList.json";
import SearchBox from "../searchBox/SearchBox";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

function EmployeesList() {
  const navigate = useNavigate();

  return (
    <EmployeesListContainer>
      <ButtonContainer>
        <Button buttonType={BUTTON_TYPE_CLASSES.add}>Add employee</Button>
      </ButtonContainer>
      <h3>List of Employees</h3>
      <SearchBox
        placeholder={"search for employee"}
        onChangeHandler={() => {}}
      />
      {employees.map((employee, index) => (
        <p key={index} onClick={() => navigate(`${employee.id}`)}>
          {employee.name}
        </p>
      ))}
    </EmployeesListContainer>
  );
}

export default EmployeesList;
