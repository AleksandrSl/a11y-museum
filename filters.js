export function instrumentFilter() {
    const all = document.querySelector("#exhibition-filter-all")
    const today = document.querySelector("#exhibition-filter-today")
    const tomorrow = document.querySelector("#exhibition-filter-tomorrow")
    const exhibitions = document.querySelector("#exhibitions-list")
    const filterResults = document.querySelector("#exhibitions-filter-results")

    today.addEventListener('click', () => {
        today.classList.add("active")
        tomorrow.classList.remove("active")
        all.classList.remove("active")
        for (const child of exhibitions.children) {
            child.classList.remove("d-none")
        }
        filterResults.textContent = "Доступны 3 выставки"
    })

    all.addEventListener('click', () => {
        all.classList.add("active")
        tomorrow.classList.remove("active")
        today.classList.remove("active")
        for (const child of exhibitions.children) {
            child.classList.remove("d-none")
        }
        filterResults.textContent = "Доступны 3 выставки"
    })

    tomorrow.addEventListener('click', () => {
        tomorrow.classList.add("active")
        today.classList.remove("active")
        all.classList.remove("active")
        exhibitions.children[2].classList.add("d-none")
        filterResults.textContent = "Доступны 2 выставки"
    })
}

