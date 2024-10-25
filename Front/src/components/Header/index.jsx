import styled from 'styled-components';
import Logo from '../../assets/logo.png';

// Logo styling within the navigation header
const HomeLogo = styled.img`
  height: 60px;
  width: 180px;
  padding-left: 30px;
`;

// Container for the entire navigation bar
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  height: 90px;
  padding-right: 80px;
`;

// Styling for each navigation link
const NavLink = styled.a`
  color: #FFFF;
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
`;

function Header() {
  return (
    <NavContainer>
      {/* Logo linking to the homepage */}
      <a href="#">
        <HomeLogo src={Logo} />
      </a>
      {/* Navigation links */}
      <NavLink>Accueil</NavLink>
      <NavLink>Profil</NavLink>
      <NavLink>Réglage</NavLink>
      <NavLink>Communauté</NavLink>
    </NavContainer>
  );
}

export default Header;
