import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper";

type ImagesProps = {
  images: string[];
};

const Images: FC<ImagesProps> = ({ images }) => {
  return (
    <Swiper modules={[Navigation, Pagination]} navigation loop pagination={{ clickable: true }}>
      {images.map((image) => (
        <SwiperSlide key={image}>
          <Image src={image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Images;

const Image = styled.img`
  aspect-ratio: 1.5;
  max-width: 100%;
  object-fit: contain;
`;
