import styled from 'styled-components'
import Logo from '../../assets/logo.png'

const HomeLogo = styled.img`
  height: 60px;
  width: 180px;
  padding-left: 30px;
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  height: 90px;
  padding-right: 80px;
`

const NavLink = styled.a`
color: #FFFF;
font-weight: 500;
font-size: 24px;
cursor: pointer;
`


function Header() {
  return (
    <NavContainer>
      <a href="#">
        <HomeLogo src={Logo} />
      </a>
      <NavLink>Accueil</NavLink>
      <NavLink>Profil</NavLink>
      <NavLink>Réglage</NavLink>
      <NavLink>Communauté</NavLink>
    </NavContainer>
  )
}

export default Header
