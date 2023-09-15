const _ = require('lodash');
const path = require('path');
const createPaginatedPages = require('gatsby-paginate');
const userConfig = require('./config');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC }, },
          limit: 1000
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                slug
                title
                date(formatString: "MMMM D, YYYY")
                featuredImage {
                  childImageSharp {
                    gatsbyImageData(width: 1920)
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  const blogPostTemplate = path.resolve('src/templates/blog-post.js');

  _.each(posts, (post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: 'src/templates/index.js',
      pageLength: userConfig.postsPerPage,
    });

    createPage({
      path: post.node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.frontmatter.slug,
        previous,
        next,
      },
    });
  });
};
