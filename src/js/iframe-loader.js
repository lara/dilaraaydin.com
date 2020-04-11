const iframes = document.querySelectorAll("iframe")

for (const iframe of iframes) {
  iframe.addEventListener("load", () => {
    setTimeout(() => {
      iframe.classList.add("loaded")
    }, 100)
  })
}
