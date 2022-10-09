import FormValidator from "./formValidator.js"

const cf = new FormValidator('.contact-form')

cf.regInput('username', {
    pattern: null,
    max: 20,
    min: 3
})
cf.regInput('mail', {
    pattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
    max: 30,
    min:3
})
cf.regInput('message', {
    pattern: null,
    max: 1000,
    min: 5
})

