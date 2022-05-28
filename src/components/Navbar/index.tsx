import Nav from './styles';
import logo from '../../assets/logo.svg';
import Button from '../Button';

const Navbar = () => (
  <Nav>
    <span>
      <img src={logo} alt="Shortly Logo" />
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
    </span>
    <ul>
      <li>Login</li>
      <Button borderRadius="28px" padding="9px 23px">
        Sign Up
      </Button>
    </ul>
  </Nav>
);

export default Navbar;
