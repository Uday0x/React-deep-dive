//here in this we try to create a basic version of react to understand the flwo of react

function customRender(reactElemnt,conatiner){
    const domelment = document.createElement(reactElemnt.type)
    domelment.innerHTML = reactElemnt.children
    domelment.setAttribute('href',reactElemnt.props.href)
    domelment.setAttribute('target',reactElemnt.props.target)
    conatiner.appendChild(domelment)
}


const reactElemnt = {
    type:"a",
    props :{
        href:"https://google.com",
        target:'_blank',
    },
    children:"click me to go to google"
}


const mainContainer = document.querySelector('#Root') 
customRender(reactElemnt,mainContainer)