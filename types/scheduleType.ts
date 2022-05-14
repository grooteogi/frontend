export type ScheduleType = {
  payMethod: '만나서 결제' | '더치페이' | '사주세요' | '사줄게요';
  promises: [
    {
      date: string;
      startTime: string;
      endTime: string;
      location: string;
      place: string;
    },
  ];
};
