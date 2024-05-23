import { styled } from "@stitches/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled("div", {
  textAlign: "center",
  marginTop: "50px",
});

const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  textAlign: "center",
  marginTop: "50px",
  minHeight: "50vh",
  backgroundColor: "#FDFBF6",
  position: "relative",
});

const ContainerDate = styled("div", {});

const DateText = styled("p", {
  width: "100%",
  fontSize: "3.5vh",
  fontFamily: "FF Clifford Eighteen Regular, serif",
  borderTop: "2px solid black",
  borderBottom: "2px solid black",
  color: "#86604B",
  borderColor: "#86604B",
});

const ContainerLabels = styled("div", {
  position: "absolute",
  top: "60%", // Center vertically
  left: "50%", // Center horizontally
  transform: "translate(-50%, -50%)", // Center the labels
  zIndex: "1", // Ensure labels appear above background
});

const BigLabel = styled("p", {
  fontSize: "7.5vh",
  fontFamily: "Playfair Display, serif",
  margin: "0",
  color: "#86604B",
  zIndex: 1, // Ensure text appears above the ampersand
});

const BigAmpersand = styled("p", {
  fontSize: "35vh",
  fontFamily: "Montserrat, sans-serif",
  margin: "0",
  color: "rgba(134, 96, 75, 0.2)",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)", // Center the ampersand
});

const ContainerQuote = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "-2rem", // Adjust margin top as needed
  marginLeft: "2rem",
  marginRight: "2rem",
  marginBottom: "-2rem",
});

const QuoteIcon = styled(FontAwesomeIcon, {
  fontSize: "3vh",
  color: "rgba(128, 128, 128, 0.5)",
  padding: "0.5rem",
});

const TextInsideQuote = styled("p", {
  fontSize: "2.5vh",
  fontFamily: "Open Sans", // O puedes usar "Open Sans, sans-serif"
  color: "#86604B",
});

const MarginTop = styled("div", {
  marginTop: "50px",
});

type GrettingProps = {
  data?: Data;
};

export default function Gretting({ data }: GrettingProps) {
  return (
    <Wrapper id="container-greeting" className="animate__animated animate__bounce">
      <Container>
        <ContainerDate>
          <DateText>{data?.date}</DateText>
        </ContainerDate>
        <ContainerLabels>
          <BigLabel>{data?.groom.name.toUpperCase()}</BigLabel>
          <BigAmpersand>{'&'}</BigAmpersand>
          <BigLabel>{data?.bride.name.toUpperCase()}</BigLabel>
        </ContainerLabels>
      </Container>

      <ContainerQuote>
        <QuoteIcon icon={faQuoteLeft} />
        <TextInsideQuote>{'El amor es irracional; cuanto más quieres a alguien, menos lógica tiene todo'}</TextInsideQuote>
        <QuoteIcon icon={faQuoteRight} />
      </ContainerQuote>
      <MarginTop />
    </Wrapper>
  );
}
