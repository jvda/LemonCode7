import * as React from 'react';

interface SearchHistoryContext {
    searchs: string[];
    setSearchs: (value: string[]) => void;
}

export const SearchHistoryContext = React.createContext<SearchHistoryContext>({
    searchs: [],
    setSearchs: value => {
        console.warn(
            'if you are reading this, likely you forgot to add the provider on top of your app'
        );
    },
});

export const SearchHistoryProvider: React.FunctionComponent = props => {
    const [searchs, setSearchs] = React.useState<string[]>([]);

    return (
        <SearchHistoryContext.Provider value={{ searchs, setSearchs }}>
            {props.children}
        </SearchHistoryContext.Provider>
    );
};