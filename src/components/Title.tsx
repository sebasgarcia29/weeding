import { styled } from "@stitches/react";

const Layout = styled("div", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  margin: "0px auto",
  position: "relative",
});

const TitleWrapper = styled("div", {
  position: "absolute",
  width: "100%",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  textShadow: "-1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e",
  animation: "fadein 3s",
  "-moz-animation": "fadein 3s" /* Firefox */,
  "-webkit-animation": "fadein 3s" /* Safari and Chrome */,
  "-o-animation": "fadein 3s" /* Opera */,
});

const TitleMusic = styled("div", {
  position: "absolute",
  width: "100%",
  top: "70%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  textShadow: "-1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e",
});

const VideoBackground = styled("video", {
  backgroundColor: "#aeb8b3 !important",
  opacity: 0.9,
  objectFit: "cover",
  objectPosition: "center center",
  width: "100%",
  height: "100%",
  minHeight: 480,
});

const WeddingInvitation = styled("p", {
  fontSize: "6.0vh",
  opacity: 0.6,
  marginBottom: 16,
  color: "white",
  // fontFamily: "Dancing Script, cursive",
  fontFamily: "Playfair Display, serif",
  fontWeight: "bold",
  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
});

const GroomBride = styled("p", {
  fontSize: "5.5vh",
  opacity: 0.9,
  marginBottom: 16,
  fontFamily: "Stay Classy Serif, serif",
});

const TextMusic = styled("p", {
  fontSize: "2.8vh",
  fontWeight: "bold",
  opacity: 0.9,
  marginBottom: 16,
  // fontFamily: "Dancing Script, cursive",
  // fontFamily: "Playfair Display, cursive",
  fontFamily: "Playfair Display, serif",
  color: "white",
  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
});

const StyledButton = styled("button", {
  backgroundColor: "#C18171",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "25px", // Ajusta este valor para cambiar la forma del botón
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)", // Agrega sombra al botón
  fontSize: "2.5vh",
  fontFamily: "Roboto, sans-serif",
});

type TitleProps = {
  data?: Data;
};

export default function Title({ data }: TitleProps) {

  const smoothScroll = (target: string, duration: number): void => {
    const targetElement: Element | null = document.querySelector(target);
    if (!targetElement) return; // Check if target element exists
    const targetPosition: number = targetElement.getBoundingClientRect().top;
    const startPosition: number = window.pageYOffset;
    const distance: number = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number): void => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed: number = currentTime - startTime;
      const scrollAmount: number = Math.floor(easeInOutQuad(timeElapsed, startPosition, distance, duration));
      window.scrollTo(0, scrollAmount);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };


  const handleScroll = () => {
    smoothScroll('#container-greeting', 1000); // Cambia 1000 por la duración deseada en milisegundos
  };

  return (
    <Layout>
      <VideoBackground autoPlay loop muted playsInline>
        <source src="./assets/BackgroundVideo.mp4" type="video/mp4" />
      </VideoBackground>
      <TitleWrapper>
        <WeddingInvitation>{'!Nos casamos! ✨'}</WeddingInvitation>
        {/* <GroomBride>
          {data?.groom?.name} &#38; {data?.bride?.name}
        </GroomBride> */}
      </TitleWrapper>
      <TitleMusic>
        <TextMusic>
          {'La música de fondo es parte de la experiencia'}
        </TextMusic>
        <StyledButton className="button-hover" onClick={handleScroll}>
          {'Continuar'}
        </StyledButton>

      </TitleMusic>
    </Layout>
  );
}
