import _ from 'lodash'
import './style.css'
import MyImage from './image.jpg'
import console, { cube } from './console'

function component(){
    console();
    console();
    cube(2)
    localStorage.setItem("8080", "this is items for local 8080")
    const div = document.createElement('div');

    div.innerHTML = ['Hello', 'webpack'].join(" ")
    div.classList.add('hello')

    const image = new Image();
    image.src = MyImage
    image.classList.add('my-photo')

    div.appendChild(image)

    return div
}

document.body.appendChild(component())