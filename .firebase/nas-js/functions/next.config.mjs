// next.config.mjs
import nextra from "nextra";
var nextConfig = {};
var withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx"
});
var next_config_default = withNextra(nextConfig);
export {
  next_config_default as default
};
