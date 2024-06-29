/* eslint-disable @next/next/no-img-element */
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  flex: 1,
  backgroundColor: "#FFF",
});

const Title = styled("p", {
  fontSize: "4vh",
  fontWeight: "bold",
  color: "#86604B",
  textAlign: "center",
  margin: "0",
  fontFamily: "Dancing",
});

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter: "blur(10px)",
  zIndex: 1,
  position: "relative",
  backgroundColor: '#FFFFFF',
  paddingTop: '2em',
})

const Description = styled("p", {
  fontSize: "2.5vh",
  fontWeight: "bold",
  color: "#86604B",
  textAlign: "center",
  margin: "0",
});

const images = [
  {
    original: "./assets/photo04.jpg",
    thumbnail: "./assets/photo04.jpg",
  },
  {
    original: "./assets/photo09.jpg",
    thumbnail: "./assets/photo09.jpg",
  },
  {
    original: "./assets/photo06.jpg",
    thumbnail: "./assets/photo06.jpg",
  },
  {
    original: "./assets/photo03.jpg",
    thumbnail: "./assets/photo03.jpg",
  },
  {
    original: "./assets/photo01.jpg",
    thumbnail: "./assets/photo01.jpg",
  },
];

interface Props {
  data?: Data;
  className?: string;
}

export default function Gallery(props: Props) {

  const { className } = props;

  const renderCustomItem = (item: any) => {
    return (
      <img
        src={item.original}
        alt={item.originalAlt}
        style={{ width: '100%', height: 'auto' }}
      />
    );
  };

  return (
    <div className={className}>
      <Wrapper>
        <Divider style={{ backgroundColor: '#FFF' }}>
          <Title>{'Retratos de amor'}</Title>
        </Divider>
        <Container style={{ padding: '20px', paddingLeft: '4em', paddingRight: '4em', backgroundColor: '#FFF' }}>
          <Description>{'Un minuto, un segundo, un instante que queda en la eternidad.'}</Description>
        </Container>
        <ImageGallery
          infinite
          autoPlay
          showPlayButton={false}
          showFullscreenButton={false}
          items={images}
          renderItem={renderCustomItem} // Custom render function
        />
      </Wrapper>
    </div >
  );
}
