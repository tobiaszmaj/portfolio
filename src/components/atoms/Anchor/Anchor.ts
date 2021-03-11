import styled from 'styled-components';

const Anchor = styled.div`
  visibility: hidden;
  ${({ theme }) => theme.mq.md} {
    height: 80px;
    margin-top: -80px;
  }
`;

export default Anchor;