import { EmployeesListContainer } from "./employeesList.styles";
import { useNavigate } from "react-router-dom";
import { employees } from "../../../employeeList.json";

function EmployeesList() {
  const navigate = useNavigate();

  return (
      <EmployeesListContainer>
        {employees.map((employee, index) => (
          <p key={index} onClick={() => navigate(`${employee.id}`)}>
            {employee.name}
          </p>
        ))}
      </EmployeesListContainer>
  );
}

export default EmployeesList;
