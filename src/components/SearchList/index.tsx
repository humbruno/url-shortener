import SearchItem from '../SearchItem';
import StyledList from './styles';

const DUMMY_ITEMS = [
  {
    id: 1,
    full_url: 'https://www.frontendmentor.io',
    short_url: 'https://rel.ink/k4lKyk',
  },
  {
    id: 2,
    full_url: 'https://twitter.com/frontendmentor',
    short_url: 'https://rel.ink/gxOXp9',
  },
  {
    id: 3,
    full_url: 'https://www.linkedin.com/company/frontend-mentor',
    short_url: 'https://rel.ink/gob3X9',
  },
];

const SearchList = () => (
  <StyledList>
    {DUMMY_ITEMS.map((item) => (
      <SearchItem
        key={item.id}
        fullUrl={item.full_url}
        shortUrl={item.short_url}
      />
    ))}
  </StyledList>
);

export default SearchList;
