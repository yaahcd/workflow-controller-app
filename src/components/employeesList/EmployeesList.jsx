import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../searchBox/SearchBox";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import {
  ButtonContainer,
  EmployeesListContainer,
} from "./employeesList.styles";
import { employees } from "../../../employeeList.json";

function EmployeesList() {
  const navigate = useNavigate();
  const [searchField, setSearchField] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  useEffect(() => {
    const newFilteredEmployees = employees.filter((employee) => {
      return employee.name.toLowerCase().includes(searchField);
    });

    setFilteredEmployees(newFilteredEmployees);
  }, [employees, searchField]);

  const onSearchChange = (e)=> {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <EmployeesListContainer>
      <ButtonContainer>
        <Button buttonType={BUTTON_TYPE_CLASSES.add}>Add employee</Button>
      </ButtonContainer>
      <h3>List of Employees</h3>
      <SearchBox
        placeholder={"search for employee"}
        onChangeHandler={onSearchChange}
      />
      {filteredEmployees.map((employee, index) => (
        <p key={index} onClick={() => navigate(`${employee.id}`)}>
          {employee.name}
        </p>
      ))}
    </EmployeesListContainer>
  );
}

export default EmployeesList;
