import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import SearchBox from "../searchBox/SearchBox";
import { ButtonContainer } from "../employeesList/employeesList.styles";
import { JobListContainer, SingleJobContainer } from "./jobList.styles";
import { jobs } from "../../../jobList.json";

function JobList() {
  const navigate = useNavigate();
  const [jobList, setJobList] = useState(jobs);

  return (
    <JobListContainer>
      <ButtonContainer>
        <Button buttonType={BUTTON_TYPE_CLASSES.add}>Add new job</Button>
      </ButtonContainer>
      <h3>List of Jobs</h3>
      <SearchBox
        placeholder={"search for job"}
        onChangeHandler={"onSearchChange"}
      />
      {jobList.map((job) => (
        <SingleJobContainer onClick={() => navigate(`${job.job_code}`)}>
          <p>
            <span>Code:</span> {job.job_code}
          </p>
          <p>
            <span>Name:</span> {job.name}
          </p>
          <p>
            <span>Location:</span> {job.address.city}
          </p>
        </SingleJobContainer>
      ))}
    </JobListContainer>
  );
}

export default JobList;
