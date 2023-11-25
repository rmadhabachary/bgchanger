const btns=document.querySelectorAll('.btn')
const body=document.querySelector('body')

btns.forEach(function(btn){
    btn.addEventListener('click',(e)=>{
        if(e.target.id==="orange"){
            body.style.backgroundColor=e.target.id
            alert(`Are you sure to change the background color to ${e.target.id} ?`)
        }
        if(e.target.id==="white"){
            body.style.backgroundColor=e.target.id
            alert(`Are you sure to change the background color to ${e.target.id} ?`)
        }
        if(e.target.id==="green"){
            body.style.backgroundColor=e.target.id
            alert(`Are you sure to change the background color to ${e.target.id}?`)
        }
    })
})
