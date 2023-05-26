const form = document.querySelector('#formularios_contacto')

form.addEventListener('submit', async(e)=>{
    e.preventDefault()

    const target = e.target,
       name = target.querySelector('#nombre').value,
       from = target.querySelector('#correo').value,
       telefono = target.querySelector('#telefono').value, 
       subject = target.querySelector('#asunto').value,
       message = target.querySelector('#mensaje').value

    const response = await fetch('https://plantasmailserver.onrender.com/api/mail', {
        method: 'POST',
        body: JSON.stringify({
            name,
            from,
            subject,
            message
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }),
    data = await response.json()

    if (response.status === 200) {
        alert(data.message)
        form.reset()
    } else {
        alert(data.message)
    }

})