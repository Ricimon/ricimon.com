import Helmet from 'react-helmet';
import React from 'react';
import styled from 'styled-components';

import userConfig from '../../config';

import Layout from '../templates/layout';

import Container from '../components/Container';
import H2 from '../components/H2';

const Wrapper = styled.div`
  text-align: center;
`;

function NotFound() {
  return (
    <Layout>
      <Container>
        <Helmet
          title={`${userConfig.title} | ${userConfig.author}`}
          htmlAttributes={{ lang: 'en' }}
        >
          <meta
            name="description"
            content={`${userConfig.title} | ${userConfig.description}`}
          />
        </Helmet>
        <Wrapper>
          <H2>Sorry, that page was not found.</H2>
        </Wrapper>
      </Container>
    </Layout>
  );
}

export default NotFound;
