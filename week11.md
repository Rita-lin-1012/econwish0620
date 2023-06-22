# PostalStamp components

  * [figma page](https://www.figma.com/file/lMbFHBKni09R2YdpZMNR2T/week8?type=design&node-id=122-26)

## Redesign PostalStamp 

Usage:
```js
const stampl = {
    left: "-10px",
    bottom: "-50px",
    transform: "rotate(-45deg)"
}
<PostalStamp variant = {2} stampleLocation = {stampl}/>

```

  * For `variant`, try to use [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

# Deploy to GitHub Pages

## Create a vite project

 * <https://github.com/tpemartin/111-2-multimedia-publication/blob/main/week8/week8.md>

## Github Desktop

  * <https://desktop.github.com/>

### Create a repository

  * File > Add local repository

  * Publish repository

### Create Github page

  * (... icon ) settings > pages

  * Source: `main` branch / `docs` folder

It would create an entry to your web app at

  * <https://tpemartin.github.io/econWish>

Without further setup, you web app based url is 

  * https://tpemartin.github.io

So if your `index.html` refer to `/assets/index-d526a0c5.css`, it means there is such a file under

   * https://tpemartin.github.io/assets/index-d526a0c5.css

The correct one is

   * https://tpemartin.github.io/econWish/assets/index-d526a0c5.css

We have to setup the base path of the web app.

#### Stages of App developments

  * development stage: source codes, everything only developers could see.
  * production stage: final output file structure for public access.

## vite.config.js

```js
export default defineConfig({
  plugins: [react()],
  base: '/econWish/',
  build: {
    outDir: 'docs'
  }
})
```
   * Only `docs` folder will be deployed.
   * Repository name is `econWish` so the base path is `/econWish/`.


# MUI Layout

## Grids

  * <https://mui.com/material-ui/react-grid2/>

  * [breakpoints](https://mui.com/material-ui/customization/breakpoints/#default-breakpoints)