const errorOverlay = require("eleventy-plugin-error-overlay")
const navigation = require("@11ty/eleventy-navigation")

const excerpt = require("eleventy-plugin-excerpt")
const formatDate = require("./src/filters/formatDate")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(errorOverlay)
  eleventyConfig.addPlugin(navigation)
  eleventyConfig.addPlugin(excerpt)
  eleventyConfig.addFilter("formatDate", formatDate)
  eleventyConfig.addPassthroughCopy("src/images")
  eleventyConfig.addPassthroughCopy("src/js")

  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "njk",
    "png",
    "jpg",
    "jpeg",
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
