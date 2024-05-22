import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import Author1 from './Author1';
import Author2 from './Author2';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

function Header({ config }) {
  const { author, authorDescription, description, social } = config;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <Author1><Link to="/">{author}</Link></Author1>
        <Author2><Link to="/">{authorDescription}</Link></Author2>
        <P>{description}</P>
        {social &&
          <Social
            github={social.github}
            twitter={social.twitter}
          />
        }
      </Wrapper>
    </Container> 
  );
}

export default Header;
