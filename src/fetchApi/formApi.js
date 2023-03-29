
const form = document.querySelector('.formApi')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
})

