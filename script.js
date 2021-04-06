const toggles = document.querySelectorAll('.faq-toggle')

console.log(toggles)

toggles.forEach(el => {
  

  el.addEventListener('click', () => {
    el.parentElement.classList.toggle('active')
  })
})