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
  padding: "1em",
  // backgroundColor: "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(10px)",
  zIndex: 1,
  position: "relative",
  // borderBottom: "1px solid #86604B",
  // borderTop: "1px solid #86604B",
})

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
  return (
    <Wrapper>
      <Container>
        <Title>{String('Retratos de nuestro amor').toUpperCase()}</Title>
      </Container>
      <ImageGallery
        infinite
        autoPlay
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
}
