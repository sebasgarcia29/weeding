/* eslint-disable @next/next/no-img-element */
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  flex: 1,
  backgroundColor: "rgba(134, 96, 75, 0.2)",
});

const Title = styled("p", {
  fontSize: "4vh",
  fontWeight: "bold",
  color: "#86604B",
  textAlign: "center",
  margin: "0",
});

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter: "blur(10px)",
  zIndex: 1,
  position: "relative",
})

const Description = styled("p", {
  fontSize: "2.5vh",
  fontWeight: "bold",
  color: "#86604B",
  textAlign: "center",
  margin: "0",
});

const images = [
  // {
  //   original: "./assets/Gallery_Photo_01.png",
  //   thumbnail: "./assets/Gallery_Photo_01.png",
  // },
  {
    original: "./assets/Gallery_Photo_02.png",
    thumbnail: "./assets/Gallery_Photo_02.png",
  },
  {
    original: "./assets/Gallery_Photo_03.png",
    thumbnail: "./assets/Gallery_Photo_03.png",
  },
  {
    original: "./assets/Gallery_Photo_04.png",
    thumbnail: "./assets/Gallery_Photo_04.png",
  },
  {
    original: "./assets/Gallery_Photo_05.png",
    thumbnail: "./assets/Gallery_Photo_05.png",
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
        <Container style={{ paddingLeft: "0.5em", paddingRight: '0.5em', paddingBottom: '1em' }}>
          <Title>{String('Retratos de nuestro amor').toUpperCase()}</Title>
        </Container>
        <Container style={{ padding: '20px', paddingLeft: '4em', paddingRight: '4em', backgroundColor: 'white' }}>
          <Description>{'Un minuto, un segundo, un instante que queda en la eternidad'}</Description>
        </Container>
        <ImageGallery
          // infinite
          // autoPlay
          showPlayButton={false}
          showFullscreenButton={false}
          items={images}
          renderItem={renderCustomItem} // Custom render function
        />
      </Wrapper>
    </div>
  );
}
