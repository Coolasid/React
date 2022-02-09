
import styled from "styled-components";

const NavBarWrapper = styled.header`
    
    height: 120px;
    background-color: #000;
    
`

function NavBar(){
    return (
      <NavBarWrapper>
        <Logo>
          <img src="" height="60px" alt="logo.png" />
        </Logo>

        <ResourceLinks>
          <Button>TRY NOW</Button>
          <A>About us</A>
          <A>FAq </A>
          <A>Login</A>
        </ResourceLinks>
      </NavBarWrapper>
    );
}

export {NavBar};