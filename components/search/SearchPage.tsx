import React, { useRef, useState } from 'react';
import Content from '@components/layout/Content';
import Carousel from '@components/common/Carousel';
import Dropdown from '@components/common/Dropdown';
import PostCard from '@components/common/PostCard';
import SearchBar from '@components/search/SearchBar';
import SearchMenu from '@components/search/SearchMenu';
import SortingTab from '@components/common/SortingTab';
import Wrapper from '@components/common/Wrapper';
import { fetchedHashtag, fetchedPostCard } from 'types/fetchedData';
import tempButtons from '@components/search/SearchMenu/data.json';
import { useQuery } from 'react-query';
import { useSearch } from '@components/search/context';
import useOnScreen from '@hooks/useOnScreen';

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

const SearchPage = () => {
  const [clickedPostId, setClickedPostId] = useState<number>(-1);
  const pageBottom = useRef<HTMLDivElement | null>(null);
  useOnScreen(pageBottom);

  const SearchQuery = useSearch();

  const fetchPosts = async () => {
    return;
  };

  const { data, status } = useQuery(['posts'], () => fetchPosts());

  const searchPost = (wordEntered: string) => {
    console.log(wordEntered);
  };

  // const onHashtagChange = (tagValue: string) => dispatch({ type: 'SET_TAG', tagValue });
  // const onSortChange = (sort: string) => dispatch({ type: 'SET_SORT', sort });
  // const onRegionChange = (region: string) => dispatch({ type: 'SET_REGION', region });

  const imgLists = [
    {
      src: '/imgs/Carousel1.png',
      alt: 'img for test link',
      link: 'https://www.google.com/?gws_rd=ssl',
    },
    {
      src: '/imgs/Carousel2.png',
      alt: 'sad carousel',
      link: '',
    },
  ];

  if (status === 'loading') return <>Loading...</>;
  if (status === 'error') return <>Error</>;

  return (
    <Content>
      <Wrapper flexDirection={'column'} alignItems={'center'} gap={{ gap: 50 }}>
        <Carousel imgLists={imgLists} />
        <SearchBar onSearchClick={searchPost} placeholder={'검색어를 입력해주세요'} />
        <SearchMenu state={SearchQuery.tag} onClick={SearchQuery.SET_TAG} data={tempButtons as fetchedHashtag[]} />
      </Wrapper>
      <Wrapper
        flexDirection={'row'}
        justifyContent={'space-between'}
        padding={{ paddingTop: '50px', paddingBottom: '35px' }}
      >
        <SortingTab state={SearchQuery.sort} onClick={SearchQuery.SET_SORT} itemList={['최신순', '인기순', '조회순']} />
        <Dropdown
          state={SearchQuery.region}
          onClick={SearchQuery.SET_REGION}
          list={['강서구', '구로구', '금천구', '관악구', '동작구', '영등포구', '양천구', ' 마포구', '서대문구']}
        />
      </Wrapper>
      <Wrapper flexDirection={'row'} justifyContent="space-evenly" gap={{ gap: 20 }}>
        {howManyCards.map(idx => {
          return <PostCard key={idx} fetchedData={samplePostCard} setClickedPostId={setClickedPostId} />;
        })}
      </Wrapper>
      <div ref={pageBottom} />
    </Content>
  );
};
export default SearchPage;
