import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content center;
align-items: center;
text-align: center;
margin: auto;
`

export const HomePageHeader = styled.h1` 
font-family: 'Kite One';
font-size: 25px;
display: flex;
justify-content: center;
align-items: center;
margin: 30px auto;
`

export const HomepageButtonsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content center;
align-items: center;
text-align: center;
margin: auto;
`

export const HomePageButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;
    padding: 15px;
    border: 1px solid #1D3557;
    border-radius: 10px;
    background-color: #457B9D;
    color: white;
    font-size: 20px;
    text-shadow: 1px 0px 1px rgba(128, 0, 0, 1);
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    height: 80px;
    width: 80vw;
    cursor: pointer;
    transition: .5s;

    &:hover {
       transform: scale(1.01); 
    }
`
