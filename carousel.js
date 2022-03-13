export function instrumentCarousel() {
    const nextBtn = document.querySelector("#exhibitions-items-next-btn")
    const prevBtn = document.querySelector("#exhibitions-items-prev-btn")
    nextBtn.addEventListener("click", nextSlide)
    prevBtn.addEventListener("click", previousSlide)
    let currentSlide = 0
    const slides = document.querySelector("#exhibitions-items").children

    function nextSlide() {
        slides[currentSlide].classList.add("d-none")
        currentSlide = (currentSlide + 1) % slides.length
        slides[currentSlide].classList.remove("d-none")
    }

    function previousSlide() {
        slides[currentSlide].classList.add("d-none")
        currentSlide = Math.abs(currentSlide - 1) % slides.length
        slides[currentSlide].classList.remove("d-none")
    }
}
