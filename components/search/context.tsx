import React, { createContext, Dispatch, useContext, useReducer } from 'react';

export type SearchStateType = {
  keyword: string;
  tag: string;
  page: number;
  sort: string;
  region: string;
};

export type PostStateType = {};

const SearchContext = createContext<any>(undefined);

type SearchAction =
  | { type: 'SET_KEYWORD'; keyword: string }
  | { type: 'SET_TAG'; tagValue: string }
  | { type: 'SET_PAGE'; page: number }
  | { type: 'SET_SORT'; sort: string }
  | { type: 'SET_REGION'; region: string };

const queryReducer = (state: SearchStateType, action: SearchAction): SearchStateType => {
  switch (action.type) {
    case 'SET_KEYWORD':
      return { ...state, keyword: action.keyword };
    case 'SET_TAG':
      return state.tag === action.tagValue ? { ...state, tag: '' } : { ...state, tag: action.tagValue };
    case 'SET_PAGE':
      return { ...state, page: action.page };
    case 'SET_SORT':
      return { ...state, sort: action.sort };
    case 'SET_REGION':
      return { ...state, region: action.region };
    default:
      return state;
  }
};

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchState, dispatchSearch] = useReducer(queryReducer, {
    keyword: '',
    tag: '',
    page: 0,
    sort: '최신순',
    region: '지역구',
  });
  const setKeyword = (keyword: string) => {
    dispatchSearch({ type: 'SET_KEYWORD', keyword });
  };
  const setTag = (tagValue: string) => {
    dispatchSearch({ type: 'SET_TAG', tagValue });
  };
  const setPage = (page: number) => {
    dispatchSearch({ type: 'SET_PAGE', page });
  };
  const setSort = (sort: string) => {
    dispatchSearch({ type: 'SET_SORT', sort });
  };
  const setRegion = (region: string) => {
    dispatchSearch({ type: 'SET_REGION', region });
  };
  return (
    <SearchContext.Provider
      value={{ state: searchState, dispatch: dispatchSearch, setKeyword, setTag, setPage, setSort, setRegion }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error('query State Provider not found');
  return context;
};
