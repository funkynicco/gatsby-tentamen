# SAAB Blog

> This is a SAAB blog site made in Gatsby, which is a framework based on ReactJS.

Site is built with CSS grids and flexbox layout.

## Requirements
- Git
- NodeJS

## Develop and Run
1. Install Gatsby client globally with `npm install -g gatsby-cli`.
2. Clone the project with `git clone https://github.com/funkynicco/gatsby-tentamen.git`
3. `cd` into the folder `gatsby-tentamen`.
4. Run `npm install` to download all node packages required for the gatsby project.
5. Once all is downloaded, run `gatsby develop` to launch a developer server within the console and access the site via `https://localhost:8000` (or whichever port it chose).

## What is Gatsby
Gatsby is a framework based on ReactJS that allows you to create dynamic web sites using components. Components have styling (CSS) attached to them which eliminates the need for external css files and keeps style blocks relative to their affected parts.

We're also using gatsby image processing to rescale images dynamically and download a low resolution at page load, and successfully upgrade (download larger image) the resolutions on the images as page is loaded. This makes the site load very fast as there are no heavy resources to wait on before rendering, and the layout of the site is not shifting around as it loads the images.