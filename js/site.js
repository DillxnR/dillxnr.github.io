document.querySelector('a').onmousemove = (e) => {
  const long = e.pageX - e.target.offsetLeft
  const lat = e.pageY - e.target.offsetTop
  e.target.style.setProperty('--long', `${ long }px`)
  e.target.style.setProperty('--lat', `${ lat }px`)
}
