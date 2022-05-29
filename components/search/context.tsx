import React, { createContext, Dispatch, useContext, useReducer } from 'react';

export type SearchStateType = {
  keyword: string;
  sort: string;
  region: string;
};

const initialState: SearchStateType = {
  keyword: '',
  sort: '최신순',
  region: '강서구',
};

type SearchAction =
  | { type: 'SET_KEYWORD'; keyword: string }
  | { type: 'SET_SORT'; sort: string }
  | { type: 'SET_REGION'; region: string };

type SearchDispatch = Dispatch<SearchAction>;

const SearchContext = createContext<SearchStateType>(initialState);
const SearchDispatchContext = createContext<SearchDispatch>(() => null);

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
  const [searchState, dispatchSearch] = useReducer(searchReducer, initialState);
  const values = React.useMemo(() => searchState, [searchState]);

  return (
    <SearchContext.Provider value={values}>
      <SearchDispatchContext.Provider value={dispatchSearch}>{children}</SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchStateType => {
  return useContext(SearchContext);
};

export const useSearchDispatch = (): SearchDispatch => {
  return useContext(SearchDispatchContext);
};
