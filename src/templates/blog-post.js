import * as React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import userConfig from '../../config';

import Layout from './layout';

import Article from '../components/Article';
import ArticleHeader from '../components/ArticleHeader';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import FeaturedImage from '../components/FeaturedImage';
import PageNav from '../components/PageNav';
import Share from '../components/Share';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const author = get(this.props, 'data.site.siteMetadata.author');
    const featuredImg = getImage(post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData);
    const { previous, next } = this.props.pageContext;

    let url = '';
    if (typeof window !== `undefined`) {
      url = window.location.href;
    }

    return (
      <Layout>
        <Container>
          <Helmet
            title={`${post.frontmatter.title} | ${author}`}
            htmlAttributes={{ lang: 'en' }}
          >
            <meta
              name="description"
              content={`${userConfig.title} | ${userConfig.description}`}
            />
          </Helmet>
          <Card>
            <ArticleHeader>
              {featuredImg && (
                <FeaturedImage image={featuredImg} />
              )}
              <h1>{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date}</p>
              <span />
            </ArticleHeader>
            <Article>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Article>
            {userConfig.showShareButtons && (
              <Share url={url} title={post.frontmatter.title} />
            )}
          </Card>

          <PageNav>
            {previous && (
              <Button to={previous.frontmatter.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Button>
            )}

            {next && (
              <Button to={next.frontmatter.slug} rel="next">
                {next.frontmatter.title} →
              </Button>
            )}
          </PageNav>
        </Container>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 1920)
          }
        }
      }
    }
  }
`;
