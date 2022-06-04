import Button from '../Button';
import ListItem from './styles';

type SearchItemProps = {
  fullUrl: string;
  shortUrl: string;
};

const SearchItem = ({ fullUrl, shortUrl }: SearchItemProps) => (
  <ListItem>
    <p>{fullUrl}</p>
    <span className="divider" aria-hidden="true" />
    <strong>{shortUrl}</strong>
    <Button borderRadius="5px" padding="10px 31px">
      Copy
    </Button>
  </ListItem>
);

export default SearchItem;
