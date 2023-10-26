import styled from "styled-components";

export const JobListContainer = styled.div`
background-color: #DEE2E6;
display: flex;
flex-direction: column;
justify-content center;
align-items: center;
margin: auto;
width: 65vw;
position: relative;
border: 1px solid #ADB5BD;
border-radius: 5px;
padding-bottom: 20px;

h3 {
    font-family: 'Kite One';
    font-size: 30px;
    margin: 20px;
}

p {
    margin: 10px;
    cursor: pointer;
    border: none;
    font-size: 18px;

}

    span {
        font-weight: 700;
    }
}
`;

export const SingleJobContainer = styled.div`
  display: flex;

  &:hover {
    font-size: 19px;
    font-weight: 700;
    color: #1b263b;
  }
`;
