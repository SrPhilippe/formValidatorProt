import FormValidator from "./formValidator.js"

const cf = new FormValidator('.contact-form')

cf.regInput('username')
cf.regInput('mail')
cf.regInput('message')

