import React, { createContext, useContext, useReducer } from 'react';

export type SearchStateType = {
  keyword: string;
  sort: string;
  region: string;
};

const SearchContext = createContext<any>(undefined);

type SearchAction =
  | { type: 'SET_KEYWORD'; keyword: string }
  | { type: 'SET_SORT'; sort: string }
  | { type: 'SET_REGION'; region: string };

const searchReducer = (state: SearchStateType, action: SearchAction): SearchStateType => {
  switch (action.type) {
    case 'SET_KEYWORD':
      return { ...state, keyword: action.keyword };
    case 'SET_SORT':
      return { ...state, sort: action.sort };
    case 'SET_REGION':
      return { ...state, region: action.region };
    default:
      return state;
  }
};

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchState, dispatchSearch] = useReducer(searchReducer, {
    keyword: '',
    sort: '최신순',
    region: '강서구',
  });
  const setKeyword = (keyword: string) => {
    dispatchSearch({ type: 'SET_KEYWORD', keyword });
  };
  const setSort = (sort: string) => {
    dispatchSearch({ type: 'SET_SORT', sort });
  };
  const setRegion = (region: string) => {
    dispatchSearch({ type: 'SET_REGION', region });
  };
  return (
    <SearchContext.Provider value={{ searchState, setKeyword, setSort, setRegion }}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error('query State Provider not found');
  return context;
};
