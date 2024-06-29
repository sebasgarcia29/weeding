import React from 'react';
import StyledComponents from './style';
import { IanciliaryFiles } from '@/interfaces/guest';

type TitleProps = {
  data?: Data;
  className?: string;
  userInvited?: IanciliaryFiles;
};

export default function FirstSection({ className, userInvited }: TitleProps) {

  const {
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
  } = StyledComponents;

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
    <div className={className}>
      <Layout>
        {/* <VideoBackground autoPlay loop muted playsInline>
          <source src="./assets/BackgroundVideo.mp4" type="video/mp4" />
        </VideoBackground> */}
        <BackgroundDiv />
        <TitleWrapper>
          <TitleGuest>{`Nuestra Historia de Amor`}</TitleGuest>
          <WeddingInvitation>{`Un día especial rodeados de quienes amamos`}</WeddingInvitation>
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
    </div>
  );
}
