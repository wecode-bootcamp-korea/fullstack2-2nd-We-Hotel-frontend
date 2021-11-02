import styled from 'styled-components';
import Carousel from '../../components/Carousel/Carousel';

const DetailCarousel = ({ carouselItem }) => {
  return (
    <Wrapper>
      <Carousel
        carouselItem={carouselItem}
        type="main"
        width="768"
        height={'30vh'}
      />
    </Wrapper>
  );
};

export default DetailCarousel;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  max-width: 768px;
`;
