This is the code behind my personal website, https://ricimon.com.

The template was taken from https://github.com/RyanFitzgerald/devblog, and is powered by [Gatsby](https://www.gatsbyjs.com/).

## Setup

#### 1. Install Gatsby CLI

The GatsbyJS CLI can be installed locally by running the command `npm install --global gatsby-cli`

#### 2. Install project dependencies

Globally install yarn `npm install --global yarn`

Run `yarn` in the project.

#### 3. Run the server locally

A local version of the website can be launched for development with the command `gatsby develop`

## Deploying

### Manual Deploy

A manual deploy can be done by running `gatsby build` and then `gatsby serve`. The former essentially builds the entire static site into the `public/` folder, and then those contents can either be served with the latter command, or copied to a web server such as an Nginx server.

### Netlify

[Netlify](https://www.netlify.com) is a very simple way to deploy a Gatsby site such as this one. It can be done by pressing the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Ricimon/ricimon.com)

This GitHub repo has been integrated with Netlify to deploy on any new commits.
