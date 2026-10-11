const scrollY = window.scrollY

const scrollIndicator = document.getElementById("scrollIndicator")

scrollIndicator.style.top = "-16.25vw"

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  const totalHeight = document.documentElement.scrollHeight;

  const viewportHeight = document.documentElement.clientHeight;

  const scrollableDistance = totalHeight - viewportHeight;

  const scrollPercent = scrollableDistance > 0
    ? (scrollTop / scrollableDistance) * 100
    : 0;

  const indicatorPos = -16.25+0.2125*scrollPercent

  console.log(`Scroll Progress: ${Math.round(scrollPercent)}%`);
  console.log(indicatorPos)

  scrollIndicator.style.top = `${indicatorPos}vw`
});
