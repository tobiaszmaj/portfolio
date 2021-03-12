import styled from 'styled-components';
import { Element } from 'react-scroll';

const Anchor = styled(Element)`
  visibility: hidden;
  height: 0;
  opacity: 0;
  ${({ theme }) => theme.mq.md} {
    height: 80px;
    margin-top: -80px;
  }
`;

export default Anchor;