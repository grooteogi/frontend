import React, { createContext, useReducer } from 'react';
import { ScheduleEntity } from 'types/entity';
import { CreditType } from 'types/enum';

export type PostStateType = {
  post: PostFormData;
  title: string;
  content: string;
  imageUrl: string;
  hashtags: string[];
  creditType: CreditType;
  schedules: Omit<ScheduleEntity, 'scheduleId'>[];
};

export type PostFormData = {
  title: string;
  content: string;
  imageUrl: string;
};

type PostAction =
  | { type: 'SET_TITLE'; title: string }
  | { type: 'SET_CONTENT'; content: string }
  | { type: 'SET_IMAGE_URL'; imageUrl: string }
  | { type: 'SET_HASHTAGS'; hashtags: string[] }
  | { type: 'SET_CREDITTYPE'; creditType: CreditType }
  | { type: 'SET_SCHEDULES'; schedules: Omit<ScheduleEntity, 'scheduleId'>[] };

const PostContext = createContext<any>(null);

function PostReducer(state: PostStateType, action: PostAction): PostStateType {
  switch (action.type) {
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

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const initialPost: PostStateType = {
    title: '',
    content: '',
    imageUrl: '',
    hashtags: [],
    creditType: CreditType.DIRECT,
    schedules: [],
    post: {
      title: '',
      content: '',
      imageUrl: '',
    },
  };
  const [postState, dispatchPost] = useReducer(PostReducer, initialPost);

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
  const setSchedules = (schedules: Omit<ScheduleEntity, 'scheduleId'>[]) => {
    dispatchPost({ type: 'SET_SCHEDULES', schedules });
  };
  return (
    <PostContext.Provider
      value={{
        state: postState,
        dispatch: dispatchPost,
        post: {
          title: postState.title,
          content: postState.content,
          imageUrl: postState.imageUrl,
          hashtags: postState.hashtags,
        },
        title: postState.title,
        content: postState.content,
        imageUrl: postState.imageUrl,
        hashtags: postState.hashtags,
        creditType: postState.creditType,
        schedules: postState.schedules,
        setTitle,
        setContent,
        setImageUrl,
        setHashtags,
        setCreditType,
        setSchedules,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = React.useContext(PostContext);
  if (context === undefined) {
    throw new Error('usePostCreate must be used within a PostCreateProvider');
  }
  return context;
};
