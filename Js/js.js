console.log('纳新网站 by BDLab-F&B\nLet us start the game');

//手机触摸效果
let touchX = 0;
let percentage = 0;
let baseX = -30;
let timber = 0;
let endX=0;
let count=0;
const scene = document.querySelector('.scene');
const main = document.querySelector('.main')
const secTime=document.querySelector('.secTime');
const FontEnd=document.querySelector("#FontEnd");
const FontEnd_Showbox=document.querySelector('.FontEnd_Showbox').querySelector('button')
const Android_showBox_List=document.querySelector('.Android_showBox_List');
const Android_showBox_Img=document.querySelector('.Android_showBox_Img');
const btn=document.querySelector('.btn');
const btn2=document.querySelector('.btn2');
// const login=document.querySelector('.login');
// const check=document.querySelector('.check');
const konwMoreAboutAI=document.querySelector('.konwMoreAboutAI');
const moreInfoAboutAI=document.querySelector('.moreInfoAboutAI');
const btn3=document.querySelector('.btn3');

window.addEventListener('touchstart', (e) => {
    touchX = e.touches[0].clientX;
    // console.log(touchX);
    main.style.transform = ` translateZ(-86vw) translateX(0vw) translateY(0vw) rotateX(0deg) rotateY(${baseX}deg)`;

    if((-30 + parseInt(endX / 60) * 60)<=-330){
        secTime.style.display="flex";
        // login.style.display='flex';
        // check.style.display='flex';
    }
    if((-30 + parseInt(endX / 60) * 60)===-30 ||(-30 + parseInt(endX / 60) * 60)===-90 || (-30 + parseInt(endX / 60) * 60)===-390 || (-30 + parseInt(endX / 60) * 60)===-510 || (-30 + parseInt(endX / 60) * 60)===-450){
        // console.log(FontEnd);
        FontEnd.style.display='block';
    }else{
        FontEnd.style.display='none';
    }
}, { passive: false });

window.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) {
        percentage = e.touches[0].clientX - touchX;
        // console.log(percentage);
        main.style.transform = ` translateZ(-86vw) translateX(0vw) translateY(0vw) rotateX(0deg) rotateY(${percentage * 0.2 + baseX}deg)`
        // console.log(-30+percentage*0.1);
        timber = percentage * 0.2 + baseX;
        //如果不引入Timber而直接写 baxeX=-30+percentage*0.1,在接下来的 'touchend'进程中 会造成 向右面偏移一部分值的错误-WHY? 是由于时间调用时候的percentage变量有变化导致的!!!
        e.preventDefault();
        console.log();
    }
}, { passive: false })

//磁侧吸附效果
//有个蠢方法->所有角度if判断(未采用)
//角度为 -30 -90 ...  < -30-60*n >
// setInterval(() => {//Testing
//     console.log(baseX);
// }, 1500);
window.addEventListener('touchend', (e) => {
    baseX = timber;
    // console.log(baseX);
    endX = baseX;
    console.log(endX % 60, baseX, parseInt(endX / 60),-30 + parseInt(endX / 60) * 60);//endX%60 为判断条件
    if (endX % 60 > -60 && endX % 60 < 0) {
        /* 
            疑似BUG出现<向左滑动会导致无法归位>
        */
        main.style.transform = ` translateZ(-86vw) translateX(0vw) translateY(0vw) rotateX(0deg) rotateY(${-30 + parseInt(endX / 60) * 60}deg)`
        baseX=-30 + parseInt(endX / 60) * 60
    }
}, { passive: false })

// //安卓界面菜单触发
// Android_showBox_List.addEventListener('touchstart',function(){
//     this.style.backgroundColor='rgb(53, 25, 25)'
//     count++;
// })
// Android_showBox_List.addEventListener('touchend',function(){
//     this.style.backgroundColor='rgb(255, 205, 210)';
//     // console.log(count);
//     // console.log(Android_showBox_Img);
//     if(count===9){
//         Android_showBox_Img.style.display='block';
//     }
// })

// //翻转效果
// btn.addEventListener('touchstart',()=>{
//     login.style.height='0px';
//     check.style.height='100%';
// })
// btn2.addEventListener('touchstart',()=>{
//     login.style.height='100%';
//     check.style.height='0px';
// })

//人工智能显示btn效果
konwMoreAboutAI.addEventListener('touchstart',()=>{
    moreInfoAboutAI.style.height='100%';
    moreInfoAboutAI.style.width='100%'
})
btn3.addEventListener('touchstart',()=>{
    moreInfoAboutAI.style.height='0px';
    // moreInfoAboutAI.style.width='0px';
})


// 海洋部分-----------------------------------------------------------------------
const firstForm = document.getElementById('form1');
const secondForm = document.getElementById('form2');
const container = document.querySelector('.container');
const select = document.getElementById('select_major');
const submit_btn = document.getElementById('submit');
const switch_btn1= document.getElementsByClassName('switch')[0];
const switch_btn2= document.getElementsByClassName('switch')[1];
const join = document.getElementById('container--signup');
const query = document.getElementById('container--signin');





//先标记下，click事件得改
switch_btn1.addEventListener('click',function(){
    join.classList.add('filp1');
    query.classList.remove('filp1');
})
switch_btn2.addEventListener('click',function(){
    join.classList.remove('filp1');
    query.classList.add('filp1');
})


// 阻止 表单默认提交信息的行为
firstForm.addEventListener("submit",(e)=>{
    e.preventDefault();
});

secondForm.addEventListener("submit",(e)=>{
    e.preventDefault();
});