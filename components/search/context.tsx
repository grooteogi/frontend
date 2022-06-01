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

type PageStateType = boolean;

const initialPageValue: PageStateType = true;

type SearchAction =
  | { type: 'SET_KEYWORD'; keyword: string }
  | { type: 'SET_SORT'; sort: string }
  | { type: 'SET_REGION'; region: string };

type PageAction = { type: 'SET_PAGE'; value: boolean };

type SearchDispatch = Dispatch<SearchAction>;

type PageDispatch = Dispatch<PageAction>;

const SearchContext = createContext<SearchStateType>(initialState);
const SearchDispatchContext = createContext<SearchDispatch>(() => null);
const PageContext = createContext<PageStateType>(initialPageValue);
const PageDispatchContext = createContext<PageDispatch>(() => null);

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
const pageReducer = (state: PageStateType, action: PageAction): PageStateType => {
  switch (action.type) {
    case 'SET_PAGE':
      return (state = action.value);
    default:
      return state;
  }
};

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchState, dispatchSearch] = useReducer(searchReducer, initialState);
  const [pageState, dispatchPage] = useReducer(pageReducer, initialPageValue);

  const values = React.useMemo(() => searchState, [searchState]);

  return (
    <SearchContext.Provider value={values}>
      <PageContext.Provider value={pageState}>
        <SearchDispatchContext.Provider value={dispatchSearch}>
          <PageDispatchContext.Provider value={dispatchPage}>{children}</PageDispatchContext.Provider>
        </SearchDispatchContext.Provider>
      </PageContext.Provider>
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchStateType => {
  return useContext(SearchContext);
};

export const useSearchDispatch = (): SearchDispatch => {
  return useContext(SearchDispatchContext);
};
export const usePageContext = (): PageStateType => {
  return useContext(PageContext);
};

export const usePageDispatch = (): PageDispatch => {
  return useContext(PageDispatchContext);
};
