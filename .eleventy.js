const errorOverlay = require("eleventy-plugin-error-overlay")
const navigation = require("@11ty/eleventy-navigation")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(errorOverlay)
  eleventyConfig.addPlugin(navigation)
  eleventyConfig.addPassthroughCopy("src/images")
  eleventyConfig.addPassthroughCopy("src/js")

  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "njk",
    "png",
    "jpg",
    "svg",
    "css",
    "tif",
    "yml",
  ])

  return {
    dir: {
      input: "src",
    },
  }
}
