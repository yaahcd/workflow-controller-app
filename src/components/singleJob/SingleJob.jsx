import {
  JobDetailsContainer,
  JobDetails,
  PlotsContainer,
} from "./singleJob.styles";
import ExpandableContainer from "../expandableContainer/ExpandableContainer";
import { jobs } from "../../../jobList.json";
import { useParams } from "react-router-dom";

function SingleJob() {
  const { job } = useParams();
  const jobDetails = jobs.filter((singleJob) => singleJob.job_code === job);

  console.log(jobDetails);

  return (
    <JobDetailsContainer>
      <JobDetails>
        <h3>Job Details</h3>
        <p>
          <span>Name:</span> {jobDetails[0].name}
        </p>
        <p>
          <span>Address:</span>{" "}
          {`${jobDetails[0].address.line01}, ${jobDetails[0].address.city} - ${jobDetails[0].address.postcode} `}
        </p>
        <p></p>
      </JobDetails>
      <PlotsContainer>
        <h3>Plots</h3>
        {Object.keys(jobDetails[0].plots[0]).map((key, index) => {
          return (
            <ExpandableContainer title={key} mainBtn={true}>
              <p>
                <span>Total price:</span> £{" "}
                {jobDetails[0].plots[0][key].total_price}
              </p>
              <p>
                <span>Progress:</span> Ongoing
              </p>

              {jobDetails[0].plots[0][key].first_floor && (
                <ExpandableContainer title={"First floor"}>
                  <p>
                    <span>Price:</span> £{" "}
                    {jobDetails[0].plots[0][key].first_floor.price}
                  </p>
                  <p>
                    <span>Employees:</span>
                    {jobDetails[0].plots[0][key].first_floor.employees.length
                      ? "" + jobDetails[0].plots[0][key].first_floor.employees
                      : " No employee assigned"}
                  </p>
                  <p>
                    <span>Progress:</span>
                    {jobDetails[0].plots[0][key].first_floor.finished
                      ? " Finished"
                      : " Not started"}
                  </p>
                </ExpandableContainer>
              )}

              {jobDetails[0].plots[0][key].second_floor && (
                <ExpandableContainer title={"Second floor"}>
                  <p>
                    <span>Price:</span> £{" "}
                    {jobDetails[0].plots[0][key].second_floor.price}
                  </p>
                  <p>
                    <span>Employees:</span>
                    {jobDetails[0].plots[0][key].second_floor.employees.length
                      ? "" + jobDetails[0].plots[0][key].second_floor.employees
                      : " No employee assigned"}
                  </p>
                  <p>
                    <span>Progress:</span>
                    {jobDetails[0].plots[0][key].second_floor.finished
                      ? " Finished"
                      : " Not started"}
                  </p>
                </ExpandableContainer>
              )}

              {jobDetails[0].plots[0][key].studs && (
                <ExpandableContainer title={"Stud work"}>
                  <p>
                    <span>Price:</span> £{" "}
                    {jobDetails[0].plots[0][key].studs.price}
                  </p>
                  <p>
                    <span>Employees:</span>
                    {jobDetails[0].plots[0][key].studs.employees.length
                      ? "" + jobDetails[0].plots[0][key].studs.employees
                      : " No employee assigned"}
                  </p>
                  <p>
                    <span>Progress:</span>
                    {jobDetails[0].plots[0][key].studs.finished
                      ? " Finished"
                      : " Not started"}
                  </p>
                </ExpandableContainer>
              )}

              {jobDetails[0].plots[0][key].garage && (
                <ExpandableContainer title={"Garage"}>
                  <p>
                    <span>Price:</span> £{" "}
                    {jobDetails[0].plots[0][key].garage.price}
                  </p>
                  <p>
                    <span>Employees:</span>
                    {jobDetails[0].plots[0][key].garage.employees.length
                      ? "" + jobDetails[0].plots[0][key].garage.employees
                      : " No employee assigned"}
                  </p>
                  <p>
                    <span>Progress:</span>
                    {jobDetails[0].plots[0][key].garage.finished
                      ? " Finished"
                      : " Not started"}
                  </p>
                </ExpandableContainer>
              )}

              {jobDetails[0].plots[0][key].roof && (
                <ExpandableContainer title={"Roof"}>
                  <p>
                    <span>Price:</span> £{" "}
                    {jobDetails[0].plots[0][key].roof.price}
                  </p>
                  <p>
                    <span>Employees: </span>
                    {jobDetails[0].plots[0][key].roof.employees.length
                      ? "" + jobDetails[0].plots[0][key].roof.employees
                      : " No employee assigned"}
                  </p>
                  <p>
                    <span>Progress:</span>
                    {jobDetails[0].plots[0][key].roof.finished
                      ? " Finished"
                      : " Not started"}
                  </p>
                </ExpandableContainer>
              )}
            </ExpandableContainer>
          );
        })}
      </PlotsContainer>
    </JobDetailsContainer>
  );
}

export default SingleJob;
