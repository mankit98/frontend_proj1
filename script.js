const box1 = document.querySelector("#box1")
const box2 = document.querySelector("#box2")
const box3 = document.querySelector("#box3")
const box4 = document.querySelector("#box4")
const box5 = document.querySelector("#box5")
const flag1 = 0
const flag2 = 0
const flag3 = 0
const flag4 = 0
const flag5 = 0

box1.addEventListener('click',function () {
    if (flag1 == 0) {
        box1.style.width = "65%"
        box1.style.transition = "all ease 0.5s"
        box2.style.width = "6%"
        box3.style.width = "6%"
        box4.style.width = "6%"
        box5.style.width = "6%"
        flag1 = 1
    }else{
        box1.style.width = "65%"
        box1.style.transition = "all ease 0.5s"
        box2.style.width = "6%"
        box3.style.width = "6%"
        box4.style.width = "6%"
        box5.style.width = "6%"
        flag1 = 0
    }
})

box2.addEventListener('click',function () {
    if (flag2 == 0) {
        box1.style.width = "6%"
        box2.style.width = "65%"
        box2.style.transition = "all ease 0.5s"
        box3.style.width = "6%"
        box4.style.width = "6%"
        box5.style.width = "6%"
        flag2 = 1
    }else{
        box2.style.width = "6%"
        box2.style.transition = "all ease 0.5s"
        flag2 = 0
    }
})
box3.addEventListener('click',function () {
    if (flag3 == 0) {
        box1.style.width = "6%"
        box2.style.width = "6%"
        box3.style.width = "65%"
        box3.style.transition = "all ease 0.5s"
        box4.style.width = "6%"
        box5.style.width = "6%"
        flag3 = 1
    }else{
        box3.style.width = "6%"
        box3.style.transition = "all ease 0.5s"
        flag3 = 0
    }
})
box4.addEventListener('click',function () {
    if (flag4 == 0) {
        box1.style.width = "6%"
        box2.style.width = "6%"
        box3.style.width = "6%"
        box4.style.width = "65%"
        box4.style.transition = "all ease 0.5s"
        box5.style.width = "6%"
        flag4 = 1
    }else{
        box4.style.width = "6%"
        box4.style.transition = "all ease 0.5s"
        flag4 = 0
    }
})
box5.addEventListener('click',function () {
    if (flag5 == 0) {
        box1.style.width = "6%"
        box2.style.width = "6%"
        box3.style.width = "6%"
        box4.style.width = "6%"
        box5.style.width = "65%"
        box5.style.transition = "all ease 0.5s"
        flag5 = 1
    }else{
        box5.style.width = "6%"
        box5.style.transition = "all ease 0.5s"
        flag5 = 0
    }
})
