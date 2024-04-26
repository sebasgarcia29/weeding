import { styled } from "@stitches/react";
import { Divider } from "antd";

// Define your styled components
const Wrapper = styled('div', {
  textAlign: 'center',
  marginTop: '50px',
});

const WelcomeText = styled('p', {
  fontSize: '24px',
});

const MiddleText = styled('p', {
  fontSize: '36px',
  fontWeight: 'bold',
});

const Button = styled('button', {
  padding: '10px 20px',
  fontSize: '18px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '20px',
});

type GrettingProps = {
  data?: Data;
};

export default function Gretting({ data }: GrettingProps) {
  return (
    <Wrapper id="container-greeting">
      <WelcomeText>Bienvenidos a la Invitacion de</WelcomeText>
      <MiddleText>Johana & Sebastian</MiddleText>
      <Button>Ingresar</Button>
    </Wrapper>
  );
}
