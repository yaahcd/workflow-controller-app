import { EmployeesListContainer } from "./employeesList.styles";
import { useNavigate } from "react-router-dom";
import { employees } from "../../../employeeList.json";
import SearchBox from "../searchBox/SearchBox";

function EmployeesList() {
  const navigate = useNavigate();

  return (
      <EmployeesListContainer>
        <h3>List of Employees</h3>
        <SearchBox placeholder={"search for employee"} onChangeHandler={""} />
        {employees.map((employee, index) => (
          <p key={index} onClick={() => navigate(`${employee.id}`)}>
            {employee.name}
          </p>
        ))}
      </EmployeesListContainer>
  );
}

export default EmployeesList;
