
nam = document.querySelector('#nameo');
var el =document.getElementById('sub');
el.addEventListener('click',()=>{
    if(nam.value!=''){
        localStorage.setItem('name',nam.value);
        if(localStorage.getItem(localStorage.name) === null){
            localStorage.setItem(localStorage.name,'0');
        }
    }
})

