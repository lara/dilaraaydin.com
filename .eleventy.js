const errorOverlay = require("eleventy-plugin-error-overlay")
const navigation = require("@11ty/eleventy-navigation")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(errorOverlay)
  eleventyConfig.addPlugin(navigation)
  eleventyConfig.addPassthroughCopy("images")

  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "njk",
    "png",
    "jpg",
    "svg",
    "css",
    "tif",
  ])

  return {
    dir: {
      input: "src",
    },
  }
}
