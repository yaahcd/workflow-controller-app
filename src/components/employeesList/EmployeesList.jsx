import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../searchBox/SearchBox";
import {
  ButtonContainer,
  EmployeeListButton,
  EmployeesListContainer,
  SingleEmployeeContainer,
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
      <section>
      <h3>List of Employees</h3>
      <SearchBox
        placeholder={"search for employee"}
        onChangeHandler={onSearchChange}
      />
      {filteredEmployees.map((employee, index) => (
      <SingleEmployeeContainer>
        <p key={index} onClick={() => navigate(`${employee.id}`)}>
          {employee.name}
        </p>
      </SingleEmployeeContainer>
      ))}
      </section>
      <ButtonContainer>
        <EmployeeListButton>Add employee</EmployeeListButton>
        <EmployeeListButton>Assign employee</EmployeeListButton>
      </ButtonContainer>
    </EmployeesListContainer>
  );
}

export default EmployeesList;
