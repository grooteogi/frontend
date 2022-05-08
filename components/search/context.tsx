import React, { createContext, Dispatch, useContext, useReducer } from 'react';

export type SearchQuery = {
  keyword: string;
  tag: string;
  page: number;
  sort: string;
  region: string;
};

type queryState = SearchQuery;

const queryStateContext = createContext<queryState | undefined>(undefined);

type Action = { type: 'TAG'; tagValue: string } | { type: 'SORT'; sort: string } | { type: 'REGION'; region: string };

type queryDispatch = Dispatch<Action>;

const queryDispatchContext = createContext<queryDispatch | undefined>(undefined);

const queryReducer = (state: queryState, action: Action): queryState => {
  switch (action.type) {
    case 'TAG':
      return state.tag === action.tagValue ? { ...state, tag: '' } : { ...state, tag: action.tagValue };
    case 'SORT':
      return { ...state, sort: action.sort };
    case 'REGION':
      return { ...state, region: action.region };
  }
};

export const QueryContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, dispatch] = useReducer(queryReducer, {
    keyword: '',
    tag: '',
    page: 0,
    sort: '최신순',
    region: '지역구',
  });
  return (
    <queryDispatchContext.Provider value={dispatch}>
      <queryStateContext.Provider value={query}>{children}</queryStateContext.Provider>
    </queryDispatchContext.Provider>
  );
};

export const useQueryState = () => {
  const state = useContext(queryStateContext);
  if (!state) throw new Error('query State Provider not found');
  return state;
};
export const useQueryDispatch = () => {
  const dispatch = useContext(queryDispatchContext);
  if (!dispatch) throw new Error('query Dispatch Provider not found');
  return dispatch;
};
