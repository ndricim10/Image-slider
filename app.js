const images = [
    "./images/bird.webp",
    "./images/book.jpg",
    "./images/flowers.webp",
    "./images/russian-borzoi.webp",
    "./images/sea-arch.webp",
    "./images/snake.webp",
    "./images/tiramisu.webp",
]

// Create HTML
const imgClass = document.querySelector('.image')
const img = document.createElement('img')
img.src = images[0]
imgClass.appendChild(img)

const swipe = document.createElement('div')
swipe.classList.add('swipe')
imgClass.appendChild(swipe)

const leftSwipe = document.createElement('i')
const RightSwipe = document.createElement('i')

leftSwipe.classList.add('far')
leftSwipe.classList.add('fa-angle-left')
leftSwipe.classList.add('left')

RightSwipe.classList.add('far')
RightSwipe.classList.add('fa-angle-right')
RightSwipe.classList.add('right')

swipe.appendChild(leftSwipe)
swipe.appendChild(RightSwipe)

const pointersDiv = document.createElement('div')
pointersDiv.classList.add('pointers')
imgClass.appendChild(pointersDiv)
const firstI = document.createElement('i')
const secondI = document.createElement('i')
const thirdI = document.createElement('i')
const fourthI = document.createElement('i')
const fifthI = document.createElement('i')

firstI.classList.add('far')
firstI.classList.add('fa-circle')

secondI.classList.add('far')
secondI.classList.add('fa-circle')

thirdI.classList.add('far')
thirdI.classList.add('fa-circle')

fourthI.classList.add('far')
fourthI.classList.add('fa-circle')

fifthI.classList.add('far')
fifthI.classList.add('fa-circle')

pointersDiv.appendChild(firstI)
pointersDiv.appendChild(secondI)
pointersDiv.appendChild(thirdI)
pointersDiv.appendChild(fourthI)
pointersDiv.appendChild(fifthI)



let index = 0;
const totalImages = images.length;

function direction(swipe) {
    if (swipe === 'right') {
        if (index === totalImages-1) {
            index = 0;
        }
        else {
            index++;
        }
    }
    else {
        if (index <= 0) {
            index = totalImages-1;
        }

        else {
            index--;
        }
    }
    
    img.src = images[index]
}

leftSwipe.addEventListener('click', () => {
    direction('left')
    console.log(index);
})

RightSwipe.addEventListener('click', () => {
    direction('right')
    console.log(index);
})

firstI.addEventListener('click', ()=>{
    direction('left')

    secondI.classList.remove('fas')
    secondI.classList.add('far')
    thirdI.classList.remove('fas')
    thirdI.classList.add('far')
    fourthI.classList.remove('fas')
    fourthI.classList.add('far')
})
fifthI.addEventListener('click', () => {
    direction('right')
    secondI.classList.remove('fas')
    secondI.classList.add('far')
    thirdI.classList.remove('fas')
    thirdI.classList.add('far')
    fourthI.classList.remove('fas')
    fourthI.classList.add('far')
})

secondI.addEventListener('click', ()=>{
    img.src=images[1]
    secondI.classList.remove('far')
    secondI.classList.add('fas')

    thirdI.classList.remove('fas')
    thirdI.classList.add('far')
    fourthI.classList.remove('fas')
    fourthI.classList.add('far')
})
thirdI.addEventListener('click', ()=>{
    img.src=images[2]
    thirdI.classList.remove('far')
    thirdI.classList.add('fas')

    secondI.classList.remove('fas')
    secondI.classList.add('far')
    fourthI.classList.remove('fas')
    fourthI.classList.add('far')
})
fourthI.addEventListener('click', ()=>{
    img.src=images[3]
    fourthI.classList.remove('far')
    fourthI.classList.add('fas')

    secondI.classList.remove('fas')
    secondI.classList.add('far')
    thirdI.classList.remove('fas')
    thirdI.classList.add('far')
})