import "./style.css"

const button = document.querySelectorAll("button")

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnParent = e.target.parentNode
    const accordion = btnParent.parentNode
    // if (accordion.hasAttribute("openacc")) {
    //   return
    // }
    Array.from(document.querySelectorAll(".accwrap")).forEach((div) => {
      if (div !== accordion) {
        div.removeAttribute("openacc")
      }
    })
    accordion.toggleAttribute("openacc")
  })
})
