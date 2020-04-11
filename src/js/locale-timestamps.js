const timeElements = document.querySelectorAll("time")

for (const timeElement of timeElements) {
  const datetime = new Date(timeElement.getAttribute("datetime"))

  const renderedDate = datetime.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  timeElement.innerText = renderedDate
}
