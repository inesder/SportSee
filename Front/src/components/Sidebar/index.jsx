import styled from 'styled-components';
import Lift from '../../assets/musculation.png';
import Swimming from '../../assets/natation.png';
import Rest from '../../assets/repos.png';
import Bike from '../../assets/velo.png';

// Icon styling for sidebar navigation images
const Icon = styled.img``;

// Main container for the sidebar, including navigation icons and copyright
const SideBarContainer = styled.div`
  background-color: black;
  width: 120px;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Container for navigation links within the sidebar
const NavContainer = styled.nav`
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 0.7;
`;

// Style for each individual navigation link
const NavLink = styled.a`
  color: #FFFF;
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
`;

// Rotated copyright text displayed at the bottom of the sidebar
const CopyRights = styled.p`
  color: #fff;
  writing-mode: vertical-rl; // Rotates text to read vertically
  transform: rotate(180deg);
`;

function SideBar() {
  return (
    <SideBarContainer>
      <NavContainer>
        {/* Navigation links with icons */}
        <NavLink><Icon src={Lift} /></NavLink>
        <NavLink><Icon src={Swimming} /></NavLink>
        <NavLink><Icon src={Rest} /></NavLink>
        <NavLink><Icon src={Bike} /></NavLink>
      </NavContainer>
      <CopyRights>
        Copyright, SportSee 2020
      </CopyRights>
    </SideBarContainer>
  );
}

export default SideBar;
