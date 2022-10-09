export default class FormValidator {
    constructor(form) {
        this.form = document.querySelector(form)
        this.inputWithErrors = new Set()

        this.form.addEventListener('submit', e => {
            e.preventDefault()

            if (!this.InputWithErrors) {
                // Submit
            }
        })
    }

    regInput(selector, callback) { // Register
        const inputField = this.form.querySelector(`[data-input="${selector}"]`)
        inputField.addEventListener('input', e => this.checkErrors(e))
        this.checkElementError(inputField)
    }

    checkElementError(input) { // This function verifies if the log from the input already exists

        const logElement = input.closest('li').querySelector('.log') ?? false
                        // select the closest <li> ancestor

        if (!logElement) {
            const log = document.createElement('p')
            log.classList.add('log')
            input.after(log)
        }
    }

    checkErrors(event) {
        console.log(event.currentTarget)
    }

    get hasErrors() {
        return this.inputWithErrors.size > 0
    }

}