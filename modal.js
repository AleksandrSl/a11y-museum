import * as focusTrap from 'focus-trap';

export function instrumentModals() {
    const trap = focusTrap.createFocusTrap('#login-modal');
    const modalWrapper = document.querySelector('#login-modal-wrapper')
    const btn = document.querySelector('#login-modal-btn')
    const closeBtn = document.querySelector('#login-modal-close-btn')
    btn.addEventListener('click', onClickHandler)

    closeBtn.addEventListener('click', () => {
        closeModal()
    })

    function onKeyupHandler(event) {
        const key = event.code
        switch (key) {
            case 'Escape':
                closeModal()
                break
        }
    }

    function closeModal() {
        trap.deactivate()
        document.removeEventListener('keyup', onKeyupHandler)
        modalWrapper.classList.add('d-none')
    }

    function openModal() {
        document.addEventListener('keyup', onKeyupHandler)
        modalWrapper.classList.remove('d-none')
        trap.activate()
    }

    function onClickHandler() {
        openModal()
    }
}

