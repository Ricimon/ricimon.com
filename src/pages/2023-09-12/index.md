---
slug: "/welcome-to-the-blog"
title: Welcome to the Blog!
date: "2023-09-14"
featuredImage: './welcome2.png'
---

Hello! I'm Eric, and welcome to my personal website and development blog! This is where I plan on posting about various projects I've done in the past, as well as random projects and thoughts that I have. Hope you find an interesting read 😄

<!-- end -->

## Some Starting Thoughts

I'm not really a social media person, so I don't have much shared online in personal profiles on the work I've done. But I'll get to use this site for exactly that purpose! There won't really be an organization scheme as I start out here, I'll post as things come to me 😛

Alright so let's get some content in!

# Making the Site

A little about myself, I'm a VR/AR (or XR) Unity software developer, having started with making VR games for the HTC Vive back in 2016, and expanding to mobile AR games & experiences in later years. I don't have too much experience in web-dev, but I have fiddled here and there. For instance, I made a website for my startup company, Escality, over at https://escalitygames.com (*at the time of writing, I'm still working on getting that domain back, but I'm hosting a copy of that site over at https://escality.ricimon.com*).

That site was written through pure HTML/JS/CSS without any Javascript framework, so it was quite simple in interaction. Since then though, I've picked up React as my go-to web framework. I was planning on a simple create-react-app website, but then I found this neat [dev-blog template](https://github.com/RyanFitzgerald/devblog) powered by [GatsbyJS](https://www.gatsbyjs.com/).

The template's dev dependencies were a little outdated, so I spent some time upgrading all its components and solving all the compatibility issues that resulted. Having been introduced to Gatsby through this though, I can say I'm a fan of the framework! Gatsby is a React-based framework that specializes in generating static websites. What this means is that the website HTML contents you're seeing are all pre-generated and pulled directly from the server, without any additional JS processing done by your browser or the server.

Each post in this site is represented by a markdown file, and processed using Gatsby plugins to create the blog webpages. The layout and format of the website is controlled by standard React components and CSS elements declared with the [styled-components](https://styled-components.com/) plugin. It took me a bit to understand how Gatsby actually pulls the markdown data through its GraphQL queries, especially since some of the original template syntax was using older plugin versions, but the Gatsby documentation helped a lot as it had good docs on each plugin I was using.

This website's code will remain uploaded to my GitHub repo over at https://github.com/Ricimon/ricimon.com if you're interested in peeking at the source code.

## Hosting the site

Out of curiosity, I wanted to learn exactly how websites and web-servers work, so I didn't go with a one-click deployment solution for this site. I won't say too much more on this topic though, because this can get a little sensitive security-wise. However, I have gotten a lot of understanding of web-hosting concepts such as reverse proxies, dynamic DNS, and SSL encryption to get this website hosted.

Oh also, I love Docker ❤️

## What's with the post image?

Okay so yes, the post image is AI generated. I used [stable diffusion](https://github.com/AUTOMATIC1111/stable-diffusion-webui) with the [MeinaMix](https://civitai.com/models/7240/meinamix) model to generate it. It's actually a reimagined version of a screenshot from the VR game I made during my time in Escality! The game's [Conjuror's Eye](https://store.steampowered.com/app/805320/Conjurors_Eye/), and here's the original image.

<p align="center">
    <img src="./conjurors_eye_desk.png" />
</p>

I even made sure to get that glowing apple in 😉

# 

And that's about it for now. I'll be sure to write more on some of the things mentioned here, like Escality and Conjuror's Eye. Cya!
