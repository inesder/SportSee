import styled from 'styled-components'
import Lift from '../../assets/musculation.png'
import Swimming from '../../assets/natation.png'
import Rest from '../../assets/repos.png'
import Bike from '../../assets/velo.png'

const Icon = styled.img`

`

const SideBarContainer = styled.div`
background-color: black;
width: 120px;
height: 100%;
justify-content: center;
display: flex;
flex-direction: column;
align-items: center;
`

const NavContainer = styled.nav`
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 0.7;
`

const NavLink = styled.a`
color: #FFFF;
font-weight: 500;
font-size: 24px;
cursor: pointer;
`

const CopyRights = styled.p`
color: #fff;
writing-mode: vertical-rl; /* Écrit le texte verticalement */
transform: rotate(180deg);
`


function SideBar() {
  return (
    <SideBarContainer>
      <NavContainer>
        <NavLink><Icon src={Lift} /></NavLink>
        <NavLink><Icon src={Swimming} /></NavLink>
        <NavLink><Icon src={Rest} /></NavLink>
        <NavLink><Icon src={Bike} /></NavLink>
      </NavContainer>
      <CopyRights>
        Copyright, SportSee 2020
      </CopyRights>
    </SideBarContainer>
  )
}

export default SideBar
