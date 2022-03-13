export function instrumentTabs() {
    const tabs = document.querySelectorAll('[role="tab"]')
    const panels = document.querySelectorAll('[role="tabpanel"]')

    // Add or subtract depending on key pressed
    const direction = {
        "ArrowLeft": -1,
        "ArrowRight": 1,
    }

    for (let i = 0; i < tabs.length; ++i) {
        addListeners(i)
    }

    function addListeners(index) {
        tabs[index].addEventListener('click', clickEventListener)
        tabs[index].addEventListener('keydown', keydownEventListener)
        tabs[index].addEventListener('keyup', keyupEventListener)

        // Build an array with all tabs (<button>s) in it
        tabs[index].index = index
    }

    // When a tab is clicked, activateTab is fired to activate it
    function clickEventListener(event) {
        const tab = event.target
        activateTab(tab, false)
    }

    // Handle keydown on tabs
    function keydownEventListener(event) {
        const key = event.code

        switch (key) {
            case "End":
                event.preventDefault()
                // Activate last tab
                focusLastTab()
                break
            case "Home":
                event.preventDefault()
                // Activate first tab
                focusFirstTab()
                break
        }
    }

    // Handle keyup on tabs
    function keyupEventListener(event) {
        const key = event.code
        switch (key) {
            case 'ArrowLeft':
            case 'ArrowRight':
                switchTabOnArrowPress(event)
                break
            case 'Enter':
            case 'Space':
                activateTab(event.target)
                break
        }
    }

    /**
     * Either focus the next, previous, first, or last tab
     * depending on key pressed
     */
    function switchTabOnArrowPress(event) {
        const pressed = event.code
        const target = event.target
        if (target.index !== undefined) {
            console.debug(tabs)
            console.debug(target.index, tabs[target.index + direction[pressed]])
            if (tabs[target.index + direction[pressed]]) {
                tabs[target.index + direction[pressed]].focus()
            } else if (pressed === "ArrowLeft") {
                focusLastTab()
            } else if (pressed === "ArrowRight") {
                focusFirstTab()
            }
        }
    }

    function activateTab(tab, setFocus) {
        setFocus = setFocus || true
        // Deactivate all other tabs
        deactivateTabs()

        // Remove tabindex attribute
        tab.removeAttribute('tabindex')

        // Set the tab as selected
        tab.setAttribute('aria-selected', 'true')
        tab.classList.add("active")
        // Get the value of aria-controls (which is an ID)
        const controls = tab.getAttribute('aria-controls')

        // Remove is-hidden class from tab panel to make it visible
        document.getElementById(controls).classList.remove('d-none')

        // Set focus when required
        if (setFocus) {
            tab.focus()
        }
    }

    function deactivateTabs() {
        for (let t = 0; t < tabs.length; t++) {
            tabs[t].setAttribute('tabindex', '-1')
            tabs[t].setAttribute('aria-selected', 'false')
            tabs[t].classList.remove('active')
        }

        for (let p = 0; p < panels.length; p++) {
            panels[p].classList.add('d-none')
        }
    }

    function focusFirstTab() {
        tabs[0].focus()
    }

    function focusLastTab() {
        tabs[tabs.length - 1].focus()
    }
}
