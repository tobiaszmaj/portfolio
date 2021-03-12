import React from 'react';
import styled from 'styled-components';
import Content from 'components/atoms/Content/Content';
import Anchor from 'components/atoms/Anchor/Anchor';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';
import Form from 'components/molecules/Form/Form';
import ContactLinks from 'components/organisms/Contact/ContactLinks';

const Wrapper = styled.div`
  position: relative;
  padding: 50px 0 20px;
  background: ${({ theme }) => theme.dark100};
  color: ${({ theme }) => theme.white};
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatusWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.dark200};
  padding: 40px 20px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.blue};
  text-align: center;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => theme.fontSize.xlg};
  }
`;

const Status = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.semiBold};
  padding: 20px;
  ${({ theme }) => theme.mq.xs} {
    font-size: ${({ theme }) => theme.fontSize.xlg};
  }
  ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const InnerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  ${({ theme }) => theme.mq.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  ${({ theme }) => theme.mq.lg} {
    gap: 80px;
  }
`;

const FormWrapper = styled.div`
  padding: 10px 0;
`;

const Contact = () => {
  return (
    <>
      <Anchor name="contact" />
      <Wrapper id="contact-content">
        <Content>
          <SectionHeader
            title="Contact"
            paragraph="Do you have any questions or job offer? Feel free to contact me!"
          />
          <InnerContent>
            <InnerWrapper>
              <StatusWrapper>
                <Title>Status</Title>
                <Status>Open for job offers</Status>
              </StatusWrapper>
              <ContactLinks />
            </InnerWrapper>
            <FormWrapper>
              <Form />
            </FormWrapper>
          </InnerContent>
        </Content>
      </Wrapper>
    </>
  );
};

export default Contact;