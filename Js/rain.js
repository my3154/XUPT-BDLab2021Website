const BackEnd = document.querySelector('#BackEnd');

setInterval(function () {
    //创建rain元素
    var rain = document.createElement("div");
    //初始化rain属性
    rain.style.position = "fixed";
    rain.style.height = "50px";
    rain.style.width = "2px";
    rain.style.background = "greenyellow";       //有图片赋值图片路径，或者赋值16进制的颜色代码
    rain.style.filter = "blur(1px)";
    rain.style.top = "0px";
    rain.style.left = Math.random() * 100 + "vw";                    //随机化位置
    rain.style.opacity = parseInt(Math.random() * 10) / 10 + "";        //随机化透明度
    //向body里添加子节点rain
    BackEnd.appendChild(rain);
    var timer = setInterval(function () {
        var height = parseInt(rain.style.top);
        var k = 1;
        // console.log(height);
        k++;
        rain.style.top = height + 5 * Math.pow(k, 2) + "px";             //模拟重力加速度
        //当雨滴到达底部后消失并清除子节点rain
        if (rain.style.top >= "900px") {
            clearInterval(timer);
            rain.parentNode.removeChild(rain);
        }
    }, 40)                        //每隔4毫秒雨滴下落一次
}, 30)                            //每隔8毫秒生成一次雨滴


