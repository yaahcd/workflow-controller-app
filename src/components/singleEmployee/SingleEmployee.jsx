import { useParams } from "react-router-dom";
import { employees } from "../../../employeeList.json";

function SingleEmployee() {
  const { employee } = useParams();

  const employeeDetails = employees.filter((person) => person.id === employee);

  return (
    <div>
      <p>{employeeDetails[0].name}</p>
      <p>{employeeDetails[0].address}</p>
      <p>{employeeDetails[0].phone_number}</p>
      {employeeDetails[0].jobs_assigned.map((job) => {
        return (
          <>
            <p>{job.job_name}</p>
            <p>{job.address}</p>
            <p>Plots: </p>
            {Object.keys(job.plots).map((key) => {
              return <p>{`${key}: ${job.plots[key].join(", ")}`}</p>;
            })}
          </>
        );
      })}
    </div>
  );
}

export default SingleEmployee;
