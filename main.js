const inputText = document.querySelector('#input-text');
const list = document.querySelectorAll('#list li');

window.onload = () => {

    inputText.oninput = function () {
        const value = this.value.trim();

        value
            ? list.forEach(element => {
                if (element.innerText.search(value) === -1) {
                    element.classList.add('hide-text');
                } else {
                    element.classList.remove('hide-text');
                }
            })
            :
            list.forEach(element => {
                element.classList.remove('hide-text');
            });
    };
};