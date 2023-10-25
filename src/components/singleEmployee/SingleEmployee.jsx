import { useParams } from "react-router-dom";
import { EmployeeDetailsContainer, JobsAssignedContainer, PersonalInfoContainer, JobBlock } from "./singleEmployee.styles";
import { employees } from "../../../employeeList.json";

function SingleEmployee() {
  const { employee } = useParams();

  const employeeDetails = employees.filter((person) => person.id === employee);

  return (
    <EmployeeDetailsContainer>
      <PersonalInfoContainer>
      <h3>Employee Details</h3>
      <p><span>Name:</span> {employeeDetails[0].name}</p>
      <p><span>Address:</span> {employeeDetails[0].address}</p>
      <p><span>Phone number:</span> {employeeDetails[0].phone_number}</p>
      </PersonalInfoContainer>
      <JobsAssignedContainer>
      <h3>Jobs assigned to:</h3>
      {employeeDetails[0].jobs_assigned.map((job) => {
        return (
          <JobBlock>
            <p><span>Job name:</span> {job.job_name}</p>
            <p><span>Address:</span> {job.address}</p>
            <p><span>Plots assigned to: </span></p>
            {Object.keys(job.plots).map((key) => {
              return <p>{`${key}: ${job.plots[key].join(", ")}`}</p>;
            })}
            </JobBlock>
            );
          }
          )}
          </JobsAssignedContainer>
    </EmployeeDetailsContainer>
  );
}

export default SingleEmployee;
