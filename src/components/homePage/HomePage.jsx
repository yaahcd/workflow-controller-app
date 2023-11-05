import { HomePageButton, HomepageButtonsContainer, HomePageContainer, HomePageHeader } from "./homePage.styles"


function HomePage() {
  return (
    <HomePageContainer>
      <HomePageHeader>Welcome back! What would you like to do today?</HomePageHeader>
      <HomepageButtonsContainer>
      <HomePageButton to="employees">Find employees</HomePageButton>
      <HomePageButton>Find sites</HomePageButton>
      <HomePageButton>See map</HomePageButton>
      <HomePageButton>Check finances</HomePageButton>
      </HomepageButtonsContainer>
    </HomePageContainer>
  )
}

export default HomePage
