import Container from '../Container';
import SearchInput from '../SearchInput';
import SearchList from '../SearchList';

import StyledBody from './styles';

const Body = () => (
  <StyledBody>
    <Container>
      <SearchInput />
      <SearchList />
    </Container>
  </StyledBody>
);

export default Body;
