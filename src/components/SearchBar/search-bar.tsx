import { ChangeEvent } from 'react';
import './search-bar.css';

type SearchBarProps = {
  search: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ handleChange, search = '' }: SearchBarProps) {
  return (
    <div className="bar">
      <input
        type="text"
        placeholder="Search for a city"
        onChange={handleChange}
        value={search}
      />
      <button className="search-button" onClick={() => console.log('clicked')}>
        search
      </button>
    </div>
  );
}
