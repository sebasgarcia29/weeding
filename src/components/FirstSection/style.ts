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
    width: "90%",
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
    fontSize: "4.0vh",
    marginBottom: 16,
    color: "white",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
});

const TitleGuest = styled("p", {
    fontSize: "3.0vh",
    marginBottom: 16,
    color: "white",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
});

const GroomBride = styled("p", {
    fontSize: "5.5vh",
    opacity: 0.9,
    marginBottom: 16,
});

const TextMusic = styled("p", {
    fontSize: "2.8vh",
    fontWeight: "bold",
    opacity: 0.9,
    marginBottom: 16,
    color: "white",
    textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
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
    fontFamily: "inherit",
});

const BackgroundDiv = styled('div', {
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url(./assets/photo02.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});

const StyledComponents = {
    Layout,
    TitleWrapper,
    TitleMusic,
    VideoBackground,
    WeddingInvitation,
    GroomBride,
    TextMusic,
    StyledButton,
    TitleGuest,
    BackgroundDiv,
};

export default StyledComponents;