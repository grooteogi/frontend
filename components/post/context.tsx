import React, { createContext, useReducer } from 'react';
import { ScheduleEntity } from 'types/entity';
import { CreditType } from 'types/enum';
import { PostFormData } from './MeetingInfoEdit/MeetingInfoEdit';

export type PostCreateStateType = {
  title: string;
  content: string;
  imageUrl: string;
  hashtags: string[];
  creditType: CreditType;
  schedules: ScheduleEntity[];
};

export type PostFormData = {
  title: string;
  content: string;
  imageUrl: string;
  hashtags: string[];
};

type PostCreateAction =
  | { type: 'SET_POST'; post: PostFormData }
  | { type: 'SET_TITLE'; title: string }
  | { type: 'SET_CONTENT'; content: string }
  | { type: 'SET_IMAGE_URL'; imageUrl: string }
  | { type: 'SET_HASHTAGS'; hashtags: string[] }
  | { type: 'SET_CREDITTYPE'; creditType: CreditType }
  | { type: 'SET_SCHEDULES'; schedules: ScheduleEntity[] };

const PostCreateContext = createContext<any>(null);

function PostCreateReducer(state: PostCreateStateType, action: PostCreateAction): PostCreateStateType {
  switch (action.type) {
    case 'SET_POST':
      return {
        ...state,
        ...action.post,
      };
    case 'SET_TITLE':
      return {
        ...state,
        title: action.title,
      };
    case 'SET_CONTENT':
      return {
        ...state,
        content: action.content,
      };
    case 'SET_IMAGE_URL':
      return {
        ...state,
        imageUrl: action.imageUrl,
      };
    case 'SET_HASHTAGS':
      return {
        ...state,
        hashtags: action.hashtags,
      };
    case 'SET_CREDITTYPE':
      return {
        ...state,
        creditType: action.creditType,
      };
    case 'SET_SCHEDULES':
      return {
        ...state,
        schedules: action.schedules,
      };
    default:
      return state;
  }
}

export const PostCreateProvider = ({ children }: { children: React.ReactNode }) => {
  const initialPost: PostCreateStateType = {
    title: '',
    content: '',
    imageUrl: '',
    hashtags: [],
    creditType: CreditType.DIRECT,
    schedules: [],
  };
  const [postState, dispatchPost] = useReducer(PostCreateReducer, initialPost);

  const setPost = (post: PostFormData) => {
    dispatchPost({ type: 'SET_POST', post });
  };
  const setTitle = (title: string) => {
    dispatchPost({ type: 'SET_TITLE', title });
  };
  const setContent = (content: string) => {
    dispatchPost({ type: 'SET_CONTENT', content });
  };
  const setImageUrl = (imageUrl: string) => {
    dispatchPost({ type: 'SET_IMAGE_URL', imageUrl });
  };
  const setHashtags = (hashtags: string[]) => {
    dispatchPost({ type: 'SET_HASHTAGS', hashtags });
  };

  const setCreditType = (creditType: CreditType) => {
    dispatchPost({ type: 'SET_CREDITTYPE', creditType });
  };
  const setSchedules = (schedules: ScheduleEntity[]) => {
    dispatchPost({ type: 'SET_SCHEDULES', schedules });
  };
  return (
    <PostCreateContext.Provider
      value={{
        state: postState,
        dispatch: dispatchPost,
        title: postState.title,
        content: postState.content,
        imageUrl: postState.imageUrl,
        hashtags: postState.hashtags,
        creditType: postState.creditType,
        schedules: postState.schedules,
        setPost,
        setTitle,
        setContent,
        setImageUrl,
        setHashtags,
        setCreditType,
        setSchedules,
      }}
    >
      {children}
    </PostCreateContext.Provider>
  );
};

export const usePostContext = () => {
  const context = React.useContext(PostCreateContext);
  if (context === undefined) {
    throw new Error('usePostCreate must be used within a PostCreateProvider');
  }
  return context;
};