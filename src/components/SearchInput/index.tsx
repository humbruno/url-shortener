import Button from '../Button';
import StyledForm from './styles';

const SearchInput = () => (
  <StyledForm>
    <input
      type="text"
      name="link"
      id="link"
      placeholder="Shorten a link here..."
    />
    <Button borderRadius="10px" padding="16px 40px">
      Shorten It!
    </Button>
  </StyledForm>
);

export default SearchInput;
