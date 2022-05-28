import { useState } from 'react';

import { Nav, Header } from './styles';
import logo from '../../assets/logo.svg';
import Button from '../Button';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Header>
      <img src={logo} alt="Shortly Logo" />
      <Nav active={openMenu}>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <span className="divider" aria-hidden="true" />
        <ul>
          <li>Login</li>
          <Button borderRadius="28px" padding="9px 23px">
            Sign Up
          </Button>
        </ul>
      </Nav>
      <button
        type="button"
        className="menu"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span />
        <span />
        <span />
      </button>
    </Header>
  );
};

export default Navbar;
