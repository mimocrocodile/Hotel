let a = document.querySelectorAll(".result__stars")[0]
console.log(a)
let arr = [4,3,2]
let b = document.querySelectorAll(".result")
let co = 1
b.forEach(e=>{
    e.classList.add(co.toString())
    co++
})
co = 1
let mult = 0
let marg = 30
let copy 
b.forEach(e=>{
    if(e.classList.contains(co.toString()))
    {
        // console.log(e)
        mult = arr[co-1] 
        console.log(mult)
        while(mult>0)
        {
            copy = a.cloneNode(true)
            copy.style.marginRight = marg.toString() + "px"
            console.log(copy.style.marginRight)
            e.appendChild(copy)
            console.log(e)
            mult--
            marg+=20
        }
        marg = 30
        // a.style.marginRight = 0
    }
    co++
    
})

a.remove()
// let c = 30
// while(a!=0){
//     a--
//     b[a].style.marginRight = c.toString() + "px";
//     c +=20 
// }
