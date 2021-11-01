import styled from 'styled-components';
import Carousel from '../../components/Carousel/Carousel';

const DetailCarousel = ({ carouselItem, theme }) => {
  return (
    <Wrapper>
      <Carousel
        carouselItem={carouselItem}
        type="main"
        width="720"
        height={theme.WIDTHS.HEIGHT / 2.5}
      />
    </Wrapper>
  );
};

export default DetailCarousel;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
`;
