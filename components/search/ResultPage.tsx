import React, { useEffect, useState } from 'react';
import Content from '@components/layout/Content';
import Dropdown from '@components/common/Dropdown';
import PostCard from '@components/common/PostCard';
import SearchBar from '@components/search/SearchBar';
import SortingTab from '@components/common/SortingTab';
import Wrapper from '@components/common/Wrapper';
import { fetchedPostCard } from 'types/fetchedData';
import Button from '@components/common/Button';
import { useQuery } from 'react-query';
import { useQueryDispatch, useQueryState } from './context';

const howManyCards = Array.from(Array(20).keys());
const samplePostCard: fetchedPostCard = {
  id: 0,
  title: '저랑 밥 공부하면서 진로 고민 이야기도 해여~',
  content: '다수의 대외활동을 참가하고, 공모전 출품 경험을 기반으로 다양한 이야기 전해드리고 싶어요 같이 이야기 해요.',
  imageUrl: '/logos/dev_sample.jpg',
  views: 0,
  createDate: '',
  modifiedDate: '',
  postHashtags: [
    { id: 1, hashtagType: 'PERSONALITY', tag: '대학생활', registered: '' },
    { id: 2, hashtagType: 'PERSONALITY', tag: '취업준비', registered: '' },
    { id: 3, hashtagType: 'PERSONALITY', tag: '코딩테스트', registered: '' },
  ],
};

const fetchPosts = async () => {
  // const response = await fetch('');
  // return response.json();
};

const ResultPage = () => {
  const SearchQuery = useQueryState();
  const dispatch = useQueryDispatch();

  const onSortChange = (sort: string) => dispatch({ type: 'SORT', sort });
  const onRegionChange = (region: string) => dispatch({ type: 'REGION', region });

  const [clickedButtonId, setClickedButtonId] = useState<number>(-1);
  const [clickedPostId, setClickedPostId] = useState<number>(-1);
  const { data, status } = useQuery('posts', fetchPosts);

  const searchPost = (wordEntered: string) => {
    console.log(wordEntered);
  };

  return (
    <Content>
      <Wrapper flexDirection={'column'} alignItems={'center'} gap={{ gap: 50 }}>
        <SearchBar onSearchClick={searchPost} />
      </Wrapper>
      <Wrapper
        flexDirection={'row'}
        justifyContent={'space-between'}
        padding={{ paddingTop: '50px', paddingBottom: '35px' }}
      >
        <SortingTab itemList={['최신순', '인기순', '조회순']} state={SearchQuery} onClick={onSortChange} />

        <Dropdown
          list={['강서구', '구로구', '금천구', '관악구', '동작구', '영등포구', '양천구', ' 마포구', '서대문구']}
          state={SearchQuery}
          onClick={onRegionChange}
        />
      </Wrapper>
      <Wrapper flexDirection={'row'} justifyContent="space-evenly" gap={{ gap: 20 }}>
        {howManyCards.map(idx => {
          return <PostCard key={idx} fetchedData={samplePostCard} setClickedPostId={setClickedPostId} />;
        })}
      </Wrapper>
      <Button
        name="read more..."
        color={'lightgray'}
        fontColor={'darkgray'}
        size={'sm'}
        onClick={() => {
          return;
        }}
      />
    </Content>
  );
};
export default ResultPage;
