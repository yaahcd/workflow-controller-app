import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { ButtonContainer } from "../employeesList/employeesList.styles";
import SearchBox from "../searchBox/SearchBox";
import { JobListContainer, SingleJobContainer } from "./jobList.styles";

function JobList() {
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
      <SingleJobContainer>
        <p>
          <span>Code:</span> 5874
        </p>
        <p>
          <span>Name:</span> Millers
        </p>
        <p>
          <span>Location:</span> Bursledon
        </p>
      </SingleJobContainer>
    </JobListContainer>
  );
}

export default JobList;
