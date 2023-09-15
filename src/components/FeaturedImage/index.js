import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Wrapper from './Wrapper';

function FeaturedImage({ image }) {
  return (
    <Wrapper>
      <GatsbyImage image={image} alt="" />
    </Wrapper>
  );
}

export default FeaturedImage;
