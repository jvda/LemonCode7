import * as React from 'react';

interface SearchContext {
    toSearch: string;
    updateSearch: (value: string) => void;
}

export const LastSearchContext = React.createContext<SearchContext>({
    toSearch: 'lemoncode',
    updateSearch: value => {
        console.warn(
            'if you are reading this, likely you forgot to add the provider on top of your app'
        );
    },
});

export const LastSearchProvider: React.FunctionComponent = props => {
    const [toSearch, setSearch] = React.useState('');

    return (
        <LastSearchContext.Provider value={{ toSearch, updateSearch: setSearch }}>
            {props.children}
        </LastSearchContext.Provider>
    );
};