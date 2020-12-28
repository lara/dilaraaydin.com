const masonryElement = document.querySelector(".masonry")

imagesLoaded(masonryElement, function () {
  console.log(masonryElement)
  setTimeout(() => masonryElement.classList.add("loaded"))
  new Masonry(masonryElement, {
    itemSelector: ".grid-item",
  })
})
