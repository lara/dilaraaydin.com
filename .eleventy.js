const errorOverlay = require("eleventy-plugin-error-overlay")
const navigation = require("@11ty/eleventy-navigation")

const excerpt = require("./src/filters/excerpt")
const formatDate = require("./src/filters/formatDate")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(errorOverlay)
  eleventyConfig.addPlugin(navigation)
  eleventyConfig.addFilter("excerpt", excerpt)
  eleventyConfig.addFilter("formatDate", formatDate)
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
