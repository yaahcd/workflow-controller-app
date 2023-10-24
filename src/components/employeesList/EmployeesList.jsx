import { EmployeesListContainer } from "./employeesList.styles"

const list = [
  "John Doe",
  "Jane Done", 
  "test001",
  "test002"
]

function EmployeesList() {

  return (
    <EmployeesListContainer>
      {list.map((employee) => (
        <p>{employee}</p>
        ))}
    </EmployeesListContainer>
  )
}

export default EmployeesList
