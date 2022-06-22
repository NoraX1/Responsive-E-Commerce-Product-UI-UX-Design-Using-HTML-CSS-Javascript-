const colors = document.querySelectorAll('.colors span')

colors.forEach(c=>{
    c.addEventListener('click' , chooseColor)
})


function chooseColor(){
    let index = this.dataset.value

    const currentImage = document.querySelector(`.img-${index}`)
    document.querySelector('.image.show').classList.remove('show')
    currentImage.classList.add('show')

    colors.forEach(c=>{
        c.classList.remove('active')
        this.classList.add('active')
    })
}

const bars = document.querySelector('.fa-solid.fa-bars')

const menu = document.querySelector('.nav-items')

bars.addEventListener('click' ,()=>{
    menu.classList.add('show-menu')
})

document.addEventListener('mouseup' ,(e)=>{
    if(!menu.contains(e.target)){
        menu.classList.remove('show-menu')
    }
})