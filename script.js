async function includeHTML(){
    let includesElement = document.querySelectorAll('[w3-include-html]');
    for(let i = 0; i < includesElement.length; i++){
        const element = includesElement[i];
        file = element.getAttribute('w3-include-html');
        let resp = await fetch(file);
        if(resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}