import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

export const SearchComponent = (props) => {
    const { onSearch } = props;
    const [toSearch, search] = React.useState<string>('');

    const handleSearch = () => {
        search('');
        onSearch(toSearch);
    }

    const handleChangeSearch = (event) => {
        search(event.target.value);
    }

    return (
        <>
            <TextField label="Search" margin="normal" value={toSearch} 
                onChange={handleChangeSearch}
                onKeyPress={(ev) => {
                    if (ev.key === 'Enter') handleSearch();
                }}
            />
            <IconButton onClick={handleSearch}>
                <SearchIcon />
            </IconButton>
        </>
    )
}