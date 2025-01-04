import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "希里安-k8s",
      description: "希里安的博客演示",
    },
    "/": {
      lang: "en-US",
      title: "Cillian-k8s",
      description: "A blog demo ",
    },
    
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
