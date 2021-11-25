//Растягивание картинки в реальном времени
function compute(){
    let containerWidth = document.querySelector(".main__container").offsetWidth;
    let imgWidth = document.querySelector(".bottom").offsetWidth;
    if(parseInt(imgWidth) != parseInt(containerWidth)){
        document.querySelector(".bottom").style.width = document.querySelector(".main__container").offsetWidth.toString() + "px"
        document.querySelector(".sedona__image").style.width = document.querySelector(".main__container").offsetWidth.toString() + "px"
    // console.log("check")
    check()
    }
}

function check(){
    setInterval(compute, 1000/60)
    console.log(document.querySelector(".bottom").offsetWidth)
}

//Скрытие и раскрытие дива по кнопке
let sorch = document.querySelector(".search")
let butt = document.querySelector(".bbutton")
butt.addEventListener('click', function(){
    if(sorch.classList.contains("hide")){
        sorch.classList.remove("hide")
        sorch.classList.add("visiable")
    }
    else if(sorch.classList.contains("visiable")){
        sorch.classList.remove("visiable")
        sorch.classList.add("hide")
    }
})

//Счет людей
let count = 0, secondCount = 0
document.querySelector(".inp").value = count
document.querySelector(".inp2").value = count
function plusCount(val){
    if(val == ".inp") document.querySelector(".inp").value = ++count
    if(val == ".inp2") document.querySelector(".inp2").value = ++secondCount
}

function minusCount(val){
    if(val == ".inp"){
        if(count<=0) {count=0; document.querySelector(".inp").value = count}
        if(count>0) {document.querySelector(".inp").value = --count}}
    if(val == ".inp2"){
        if(secondCount<=0) {secondCount=0; document.querySelector(".inp2").value = secondCount}
        if(secondCount>0) {document.querySelector(".inp2").value = --secondCount}}

}

//Сокрытие плейсхолдера у инпутов с датой
let date = new Date()
document.querySelector(".enter").valueAsDate = date 
date.setDate(date.getDate()+1)
document.querySelector(".escape").valueAsDate = date 



//Обработка исключения для даты выезда до въезда/из прошлого

let findButton = document.querySelector(".find")

findButton.addEventListener('click', function(){
    if(document.querySelector(".escape").value>document.querySelector(".enter").value) console.log("OK")
    else console.log("Not OK")
})



// let cont = document.querySelector(".cont")
// cont.appendChild(copyNode)