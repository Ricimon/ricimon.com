import * as React from 'react';
import styled from 'styled-components';

import Layout from '../templates/layout';

import H2 from '../components/H2';

const Wrapper = styled.div`
  text-align: center;
`;

class NotFound extends React.Component {
  render() {
    return (
      <Layout>
          <Wrapper>
            <H2>Sorry, that page was not found.</H2>
          </Wrapper>
      </Layout>
    );
  }
}

export default NotFound;
