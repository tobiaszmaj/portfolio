import React, { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import MenuBtn from 'components/organisms/Navigation/MenuBtn';
import Links from 'components/organisms/Navigation/Links';
import Logo from 'components/atoms/Logo/Logo';
import { NavigationContext } from 'contexts/NavigationContext';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  ${({ theme }) => theme.mq.md} {
    display: none;
  }
`;

const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  transition: 0.3s;
  visibility: hidden;
  overflow: scroll;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const Background = styled.div`
  position: fixed;
  top: -184px;
  right: -184px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  z-index: -1;
  background: ${({ theme }) => theme.blueGradient};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  will-change: transform;
`;

const LogoWrapper = styled.div`
  padding: 12px 10px;
  opacity: 0;
  pointer-events: none;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Sidenav = () => {
    const { handleFullNav } = useContext(NavigationContext);
    const listRef = useRef<HTMLUListElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const list = listRef.current;
        const btn = btnRef.current;
        const background = bgRef.current;
        const logo = logoRef.current;
        const content = contentRef.current;

        if (list && logo && btn && background && content) {
            const [button] = btn.children;
            const listItems = [...list.children];

            const close = () => {
                tl.reverse();
                handleFullNav(false);
            };

            const handleClick = () => {
                tl.reversed() ? tl.play() : tl.reverse();
            };

            listItems.forEach(item => item.addEventListener('click', close));
            button.addEventListener('click', handleClick);

            const tl = gsap.timeline({
                defaults: { ease: 'Power3.easeOut' },
                reversed: true,
            });

            tl.set(content, { visibility: 'visible' });
            tl.to(background, { scale: 9, duration: 0.4, ease: ' Circ.easeOut' });
            tl.addLabel('showItems');
            tl.fromTo(
                logo,
                { autoAlpha: 0, y: -50 },
                { autoAlpha: 1, y: 0 },
                'showItems'
            );
            tl.from(listItems, { x: -50, autoAlpha: 0, stagger: 0.1 }, 'showItems');
        }
    }, []);

    return (
        <Wrapper>
            <div ref={btnRef}>
                <MenuBtn />
            </div>
            <Background ref={bgRef} />
            <Content ref={contentRef}>
                <LogoWrapper ref={logoRef}>
                    <Logo isWhite />
                </LogoWrapper>
                <InnerWrapper>
                    <List ref={listRef}>
                        <Links big />
                    </List>
                </InnerWrapper>
            </Content>
        </Wrapper>
    );
};

export default Sidenav;