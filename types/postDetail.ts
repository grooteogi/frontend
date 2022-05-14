import { PostEntity } from './entity';

export type MeetingInfoType = Pick<
  PostEntity,
  'postId' | 'title' | 'content' | 'imageUrl' | 'createAt' | 'hashtags' | 'likes' | 'mentor' | 'creditType'
>;
export type ScheduleType = Pick<PostEntity, 'schedules'>;
export type ReviewType = Pick<PostEntity, 'reviews'>;
export type DetailPostType = MeetingInfoType & ScheduleType & ReviewType;
