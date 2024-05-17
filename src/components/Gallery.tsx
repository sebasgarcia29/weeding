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
  fontFamily: "Playfair Display, serif",
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
  fontFamily: "Playfair Display, serif",
  fontWeight: "bold",
  color: "#86604B",
  textAlign: "center",
  margin: "0",
});

const images = [
  {
    original: "./assets/Gallery_Photo_1.png",
    thumbnail: "./assets/Gallery_Photo_1.png",
  },
  {
    original: "./assets/Gallery_Photo_2.png",
    thumbnail: "./assets/Gallery_Photo_2.png",
  },
  {
    original: "./assets/Gallery_Photo_3.png",
    thumbnail: "./assets/Gallery_Photo_3.png",
  },
  {
    original: "./assets/Gallery_Photo_4.png",
    thumbnail: "./assets/Gallery_Photo_4.png",
  },
  {
    original: "./assets/Gallery_Photo_5.png",
    thumbnail: "./assets/Gallery_Photo_5.png",
  },
  {
    original: "./assets/Gallery_Photo_6.png",
    thumbnail: "./assets/Gallery_Photo_6.png",
  },
];

export default function Gallery() {

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
  );
}
