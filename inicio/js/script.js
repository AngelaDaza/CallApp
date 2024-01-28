async function convertirHtmlText(){
    return await fetch('login.html')
                    .then(resp => resp.text())
                    .catch(error => console.log(error));
}
async function imprimirHtml(){
    const guardarHtml = await convertirHtmlText();
    const formulario = document.querySelector(".formulario");
    formulario.innerHTML = guardarHtml;
}

imprimirHtml();