import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
// @ts-ignore
import TextPlugin from 'gsap/TextPlugin.js';
import blobImg from 'assets/icons/blob.svg';
import MainSVG from 'assets/icons/main.inline.svg';
import NotificationSVG from 'assets/icons/notification.inline.svg';
import Text from 'assets/icons/text.inline.svg';
import htmlIcon from 'assets/icons/html.svg';
import cssIcon from 'assets/icons/css.svg';
import sassIcon from 'assets/icons/sass.svg';
import jsIcon from 'assets/icons/javascript.svg';
import tsIcon from 'assets/icons/typescript.svg';
import reactIcon from 'assets/icons/react.svg';
import reduxIcon from 'assets/icons/redux.svg';
import gatsbyIcon from 'assets/icons/gatsby.svg';
import gitIcon from 'assets/icons/git.svg';

gsap.registerPlugin(TextPlugin);

const Wrapper = styled.div`
  position: relative;
  width: 700px;
  height: 700px;
  background: url(${blobImg}) no-repeat center;
  background-size: 100%;
  opacity: 0;
`;

const MainSVGWrapper = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 0;
  left: 55%;
  transform: translateX(-55%);
`;

const MainSVGInnerWrapper = styled.div`
  position: relative;
`;

const NotificationSVGWrapper = styled.div`
  position: absolute;
  width: 170px;
  height: 170px;
  right: 140px;
  top: 390px;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 210px;
  left: 178px;
`;

const Image = styled.img`
  position: absolute;
  display: block;
  width: 110px;
  height: 110px;
  top: 110px;
  left: 210px;
`;

const technologies = [
  { name: 'HTML5', icon: htmlIcon },
  { name: 'CSS3', icon: cssIcon },
  { name: 'Sass/SCSS', icon: sassIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'TypeScript', icon: tsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Redux', icon: reduxIcon },
  { name: 'Gatsby', icon: gatsbyIcon },
  { name: 'Git', icon: gitIcon },
];

const getMarkedKeys = (word: string, keys: Array<Element>) => {
  const letters = word.toLowerCase().split('');
  const markedKeys = keys.filter(key =>
    letters.some(letter => key.id === letter)
  );
  const sortedMarkedKeys = letters.map(s => markedKeys.find(t => t.id === s));

  return sortedMarkedKeys;
};

const LandingImage = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const mainWrapper = mainRef.current;
    const notificationWrapper = notificationRef.current;

    if (mainWrapper && notificationWrapper) {
      const [mainSvg, textSvg] = mainWrapper.children;
      const [notificationSvg] = notificationWrapper.children;

      const technologyImg = imageRef.current;
      const text = textSvg.querySelector('#text');
      const keys = [...mainSvg.querySelectorAll('.key')];
      const backspace = mainSvg.querySelector('#backspace');
      const monitor = mainSvg.querySelector('#monitor');
      const screen = mainSvg.querySelector('#screen');
      const plant = mainSvg.querySelector('#plant');
      const keyboard = mainSvg.querySelector('#keyboard');
      const mobile = notificationSvg.querySelector('#mobile');
      const notification = notificationSvg.querySelector('#notification');

      gsap.set(wrapperRef.current, { opacity: 1 });
      gsap.set([monitor, plant, keyboard, technologyImg], { autoAlpha: 0 });

      const master = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
      const tl = gsap.timeline({ repeat: -1, ease: 'power3.inOut' });

      master.addLabel('showMain');
      master.fromTo(
        [monitor, keyboard, plant],
        { y: '-100' },
        { duration: 1, y: '0', autoAlpha: 1, stagger: 0.3 },
        'showMain'
      );
      master.fromTo(
        mobile,
        { y: '-100' },
        { duration: 1, y: '0', autoAlpha: 1 },
        'showMain'
      );
      master.to(screen, { duration: 0.5, fill: 'rgba(255,255,255, 0.8)' });
      master.addLabel('showNotification');
      master.fromTo(
        notification,
        { y: '120' },
        { duration: 1, y: '0', autoAlpha: 1, ease: 'Elastic.easeOut' },
        'showNotification'
      );
      master.fromTo(
        notification,
        { y: '0' },
        {
          delay: 0.7,
          y: '+=20',
          ease: 'none',
          yoyo: true,
          repeat: -1,
        },
        'showNotification'
      );
      master.add(tl);
      technologies.map(({ name, icon }) => {
        const markedKeys = getMarkedKeys(name, keys);
        console.log(markedKeys);
        tl.set(technologyImg, { attr: { src: icon } });
        tl.addLabel('show');
        tl.to(technologyImg, { duration: 1, autoAlpha: 1 }, 'show');
        tl.fromTo(
          markedKeys,
          { fill: 'rgb(43, 48, 63)' },
          {
            fill: 'rgb(158, 221, 255)',
            stagger: 0.1,
            repeat: 1,
            yoyo: true,
          },
          'show'
        );
        tl.to(text, { duration: 1, text: name }, 'show');
        tl.addLabel('hide');
        tl.to(backspace, { fill: 'rgb(158, 221, 255)', delay: 1.8 }, 'hide');
        tl.to(text, { duration: 1, text: ' ', delay: 2 }, 'hide');
        tl.to(technologyImg, { duration: 1, autoAlpha: 0, delay: 2 }, 'hide');
        tl.to(backspace, { fill: 'rgb(43, 48, 63)' });
      });
    }
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <NotificationSVGWrapper ref={notificationRef}>
        <NotificationSVG />
      </NotificationSVGWrapper>
      <MainSVGWrapper>
        <MainSVGInnerWrapper ref={mainRef}>
          <MainSVG />
          <TextWrapper>
            <Text />
          </TextWrapper>
          <Image ref={imageRef} src={htmlIcon} />
        </MainSVGInnerWrapper>
      </MainSVGWrapper>
    </Wrapper>
  );
};

export default LandingImage;
