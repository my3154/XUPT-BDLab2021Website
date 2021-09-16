const All_navigation =document.querySelectorAll('.navigation');
// console.log(All_navigation);
All_navigation.forEach(element => {
    element.addEventListener('touchstart',function(){
        console.log(this);
    })
});