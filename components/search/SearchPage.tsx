import React, { useState } from 'react';
import Content from '@components/layout/Content';
import Carousel from '@components/common/Carousel';
import Dropdown from '@components/common/Dropdown';
import PostCard from '@components/common/PostCard';
import SearchBar from '@components/common/SearchBar';
import SearchMenu from '@components/common/SearchMenu';
import SortingTab from '@components/common/SortingTab';
import Wrapper from '@components/common/Wrapper';
import { fetchedHashtag } from 'types/fetchedHashtag';
import tempButtons from '@components/common/SearchMenu/data.json';

const howManyCards = Array.from(Array(12).keys());
const tagsForCards: fetchedHashtag[] = [
  { id: 1, hashtagType: 'PERSONALITY', tag: '대학생활', registered: '' },
  { id: 2, hashtagType: 'PERSONALITY', tag: '취업준비', registered: '' },
  { id: 3, hashtagType: 'PERSONALITY', tag: '코딩테스트', registered: '' },
];

const SearchPage = () => {
  const [clickedButtonId, setClickedButtonId] = useState<number>(-1);

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
    {
      src: '/imgs/Carousel3.png',
      alt: 'alt test carousel',
    },
    {
      src: '/imgs/Carousel4.png',
      link: 'https://www.naver.com',
    },
    {
      src: '/imgs/Carousel5.png',
    },
  ];

  return (
    <Content>
      <Wrapper flexDirection={'column'} alignItems={'center'} gap={{ gap: 50 }}>
        <Carousel imgLists={imgLists} />
        <SearchBar />
        <SearchMenu
          data={tempButtons as fetchedHashtag[]}
          clickedButtonId={clickedButtonId}
          setClickedButtonId={setClickedButtonId}
        />
      </Wrapper>
      <Wrapper
        flexDirection={'row'}
        justifyContent={'space-between'}
        padding={{ paddingTop: '50px', paddingBottom: '35px' }}
      >
        <SortingTab itemList={[{ value: '인기순' }, { value: '최신순' }, { value: '리뷰순' }]} />
        <Dropdown
          list={['강서구', '구로구', '금천구', '관악구', '동작구', '영등포구', '양천구', ' 마포구', '서대문구']}
        />
      </Wrapper>
      <Wrapper flexDirection={'row'} justifyContent="space-evenly" gap={{ gap: 20 }}>
        {howManyCards.map(idx => {
          return (
            <PostCard
              key={idx}
              imageSrc={'/logos/dev_sample.jpg'}
              hashtags={tagsForCards}
              title={'저랑 밥 공부하면서 진로 고민 이야기도 해여~'}
              content={
                '다수의 대외활동을 참가하고, 공모전 출품 경험을 기반으로 다양한 이야기 전해드리고 싶어요 같이 이야기 해요.'
              }
            />
          );
        })}
      </Wrapper>
    </Content>
  );
};
export default SearchPage;
