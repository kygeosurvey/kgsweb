---

---
# @kygeosurvey/kgsweb-app

This is the home of the code and assets of KGSWeb, the Kentucky Geological Survey's Website.
It's built on [sidebase cheviot](https://sidebase.io/), which is built on [Nuxt 3](https://nuxt.com), which is built on [Vue 3](https://v3.vuejs.org/).
We've used typescript for everything, because typescript.
We're using directus for the primary database feeding the website content, with prisma for the other databases such as the oil and gas database.
We use the [Canonical](https://canonical.com/) [Style Guide](https://github.com/gajus/eslint-config-canonical), mostly as-is (except some changes for vue).
We use [Naive UI](https://www.naiveui.com/en-US/os-theme) for our UI components. It's a great library, and we're happy to be using it. For styling the components our go to is [UnoCSS](https://unocss.io/), which is a great utility-first css library. Way better than tailwind, in our opinion. Then we use a sundry bunch of packages: commitizen, semantic-release, coverage-v8, vitest, and a bunch of others. Check out the [sidebase site](https://sidebase.io/) for more info on what came in cheviot.
