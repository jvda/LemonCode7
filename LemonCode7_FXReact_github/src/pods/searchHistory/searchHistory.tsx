import * as React from "react";
import { LastSearchContext, SearchHistoryContext } from "../../core";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HistoryIcon from '@material-ui/icons/History';

const getSearhsCookie = () => {
  return JSON.parse(document.cookie.replace(/(?:(?:^|.*;\s*)githubSearchs\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
}

const setSearchsCookie = (searchs: string[]) => {
  document.cookie = "githubSearchs=" + JSON.stringify(searchs);
}

export const SearchHistoryComponent = (props) => {
  const { searchs, setSearchs } = React.useContext(SearchHistoryContext);
  const { toSearch } = React.useContext(LastSearchContext);

  const { onSearch } = props;

  React.useEffect(
    () => addLastSearch(),
    [toSearch]
  );

  const addLastSearch = () => {
    if (toSearch != '') {
      if (searchs.indexOf(toSearch) >= 0) searchs.splice(searchs.indexOf(toSearch), 1);
      searchs.unshift(toSearch);
      //setSearchsCookie(searchs);
    }
    setSearchs(searchs);
  };

  return (
    <div className="row">
      <List>
        <div>
          {searchs.map((search: string, i: number) => (
            <ListItem button onClick={() => onSearch(search)} key={i} >
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary={search} />
            </ListItem>
          ))}
        </div>
      </List>
    </div>
  );
};
