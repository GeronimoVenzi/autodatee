const $form = document.querySelector('#contact-form')
const $buttonMailTo = document.querySelector('#mail-to')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(this)
    $buttonMailTo.setAttribute('href', `mailto:geronimovenzi@live.com.ar?subject=NOMBRE: ${form.get('name')} CORREO: ${form.get('email')} EMPRESA: ${form.get('business')} TELEFONO: ${form.get('phone')}&body=${form.get('message')}`)
    $buttonMailTo.click()
}