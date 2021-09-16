//定义全局变量
const allplace = document.querySelectorAll('.placeholder');
var full = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];//0表示null，1表示我下的，2表示电脑下的
var val = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];//表示每个位置的权值
function judge() {
    //检测是否有人赢
    //行
    for (var i = 0; i < 3; i++) {
        if (full[i][0] == full[i][1] && full[i][1] == full[i][2] && full[i][0] != 0) {
            if (full[i][0] == 1) {
                window.alert("you win!");//虽然不可能,但还是写上去吧....
                return true;
            }
            else {
                window.alert("you lose");
                return true;
            }
        }
    }
    //列
    for (var i = 0; i < 3; i++) {
        if (full[0][i] == full[1][i] && full[1][i] == full[2][i] && full[0][i] != 0) {
            if (full[0][i] == 1) {
                window.alert("you win!");
                return true;
            }
            else {
                window.alert("you lose");
                return true;
            }
        }
    }
    //主对角线
    if (full[0][0] == full[1][1] && full[1][1] == full[2][2] && full[0][0] != 0) {
        if (full[0][0] == 1) {
            window.alert("you win!");
            return true;
        }
        else {
            window.alert("you lose");
            return true;
        }
    }
    if (full[0][2] == full[1][1] && full[2][0] == full[1][1] && full[0][2] != 0) {
        if (full[0][2] == 1) {
            window.alert("you win!");
            return true;
        }
        else {
            window.alert("you lose");
            return true;
        }
    }
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (full[i][j] == 0)
                return false;//说明还没结束
            if (i == 2 && j == 2) {
                window.alert("平局！");
                return true;
            }
        }
    }
    return false;//无结果
}
function bn(i, j) {
    //如果已经下过，则无效
    if (full[i][j] != 0) {
        return 0;
    } else {
        //没下过
        full[i][j] = 1;
        num1 = (i * 3 + j + 1) + "";
        document.getElementById(num1).value = "X";
        if (judge() == true) {
            return;
        }
        ai();//切换
    }
}
//重置权值：
function resetValue() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (full[i][j] != 0)
                val[i][j] = 0;
            else {
                //看行和列：  
                //最高权值
                if (((full[0][j] + full[1][j] + full[2][j]) == 4) && (full[0][j] * full[1][j] * full[2][j]) == 0
                    && ((full[0][j] - 1) * (full[1][j] - 1) * (full[2][j] - 1)) == -1)
                    val[i][j] = val[i][j] + 10000;
                if (((full[i][0] + full[i][1] + full[i][2]) == 4) && (full[i][0] * full[i][1] * full[i][2]) == 0
                    && ((full[i][0] - 1) * (full[i][1] - 1) * (full[i][2] - 1)) == -1)
                    val[i][j] = val[i][j] + 10000;
                //次级权值
                if (((full[0][j] + full[1][j] + full[2][j]) == 2) && (full[0][j] * full[1][j] * full[2][j]) == 0
                    && ((full[0][j] - 1) * (full[1][j] - 1) * (full[2][j] - 1)) == 0)
                    val[i][j] = val[i][j] + 1000;
                if (((full[i][0] + full[i][1] + full[i][2]) == 2) && (full[i][0] * full[i][1] * full[i][2]) == 0
                    && ((full[i][0] - 1) * (full[i][1] - 1) * (full[i][2] - 1)) == 0)
                    val[i][j] = val[i][j] + 1000;
                //三级权值（一排只有一个X）
                if (((full[0][j] + full[1][j] + full[2][j]) == 1) && (full[0][j] * full[1][j] * full[2][j]) == 0
                    && ((full[0][j] - 1) * (full[1][j] - 1) * (full[2][j] - 1)) == 0)
                    val[i][j] = val[i][j] + 10;
                if (((full[i][0] + full[i][1] + full[i][2]) == 1) && (full[i][0] * full[i][1] * full[i][2]) == 0
                    && ((full[i][0] - 1) * (full[i][1] - 1) * (full[i][2] - 1)) == 0)
                    val[i][j] = val[i][j] + 10;
                //四级权值（一排只有一个O）
                if (((full[0][j] + full[1][j] + full[2][j]) == 2) && (full[0][j] * full[1][j] * full[2][j]) == 0
                    && ((full[0][j] - 1) * (full[1][j] - 1) * (full[2][j] - 1)) == 1)
                    val[i][j] = val[i][j] + 5;
                if (((full[i][0] + full[i][1] + full[i][2]) == 2) && (full[i][0] * full[i][1] * full[i][2]) == 0
                    && ((full[i][0] - 1) * (full[i][1] - 1) * (full[i][2] - 1)) == 1)
                    val[i][j] = val[i][j] + 5;
                //五级权限（该行没有X或O）
                if (((full[0][j] + full[1][j] + full[2][j]) == 0) && (full[0][j] * full[1][j] * full[2][j]) == 0
                    && ((full[0][j] - 1) * (full[1][j] - 1) * (full[2][j] - 1)) == -1)
                    val[i][j] = val[i][j] + 2;
                if (((full[i][0] + full[i][1] + full[i][2]) == 0) && (full[i][0] * full[i][1] * full[i][2]) == 0
                    && ((full[i][0] - 1) * (full[i][1] - 1) * (full[i][2] - 1)) == -1)
                    val[i][j] = val[i][j] + 2;
                //主对角线：同上
                if ((i == 0 && j == 0) || (i == 2 && j == 2) || (i == 1 && j == 1)) {
                    if (((full[0][0] + full[1][1] + full[2][2]) == 4) && (full[0][0] * full[1][1] * full[2][2]) == 0
                        && ((full[0][0] - 1) * (full[1][1] - 1) * (full[2][2] - 1)) == -1)
                        val[i][j] = val[i][j] + 10000;
                    //次级权值
                    if (((full[0][0] + full[1][1] + full[2][2]) == 2) && (full[0][0] * full[1][1] * full[2][2]) == 0
                        && ((full[0][0] - 1) * (full[1][1] - 1) * (full[2][2] - 1)) == 0)
                        val[i][j] = val[i][j] + 1000;
                    //三级权值（一排只有一个X）
                    if (((full[0][0] + full[1][1] + full[2][2]) == 1) && (full[0][0] * full[1][1] * full[2][2]) == 0
                        && ((full[0][0] - 1) * (full[1][1] - 1) * (full[2][2] - 1)) == 0)
                        val[i][j] = val[i][j] + 10;
                    //四级权值（一排只有一个O）
                    if (((full[0][0] + full[1][1] + full[2][2]) == 2) && (full[0][0] * full[1][1] * full[2][2]) == 0
                        && ((full[0][0] - 1) * (full[1][1] - 1) * (full[2][2] - 1)) == 1)
                        val[i][j] = val[i][j] + 5;
                    //五级权值（该行没有X或O）
                    if (((full[0][0] + full[1][1] + full[2][2]) == 0) && (full[0][0] * full[1][1] * full[2][2]) == 0
                        && ((full[0][0] - 1) * (full[1][1] - 1) * (full[2][2] - 1)) == -1)
                        val[i][j] = val[i][j] + 2;
                }
                //副对角线(同上)
                if ((i == 0 && j == 2) || (i == 2 && j == 0) || (i == 1 && j == 1)) {
                    //一级
                    if (((full[0][2] + full[1][1] + full[2][0]) == 4) && (full[0][2] * full[1][1] * full[2][0]) == 0
                        && ((full[0][2] - 1) * (full[1][1] - 1) * (full[2][0] - 1)) == -1)
                        val[i][j] = val[i][j] + 10000;
                    //二级
                    if (((full[0][2] + full[1][1] + full[2][0]) == 2) && (full[0][2] * full[1][1] * full[2][0]) == 0
                        && ((full[0][2] - 1) * (full[1][1] - 1) * (full[2][0] - 1)) == 0)
                        val[i][j] = val[i][j] + 1000;
                    //三级权值（一排只有一个X）
                    if (((full[0][2] + full[1][1] + full[2][0]) == 1) && (full[0][2] * full[1][1] * full[2][0]) == 0
                        && ((full[0][2] - 1) * (full[1][1] - 1) * (full[2][0] - 1)) == 0)
                        val[i][j] = val[i][j] + 10;
                    //四级权值（一排只有一个O）
                    if (((full[0][2] + full[1][1] + full[2][0]) == 2) && (full[0][2] * full[1][1] * full[2][0]) == 0
                        && ((full[0][2] - 1) * (full[1][1] - 1) * (full[2][0] - 1)) == 1)
                        val[i][j] = val[i][j] + 5;
                    //五级权值（该行没有X或O）
                    if (((full[0][2] + full[1][1] + full[2][0]) == 0) && (full[0][2] * full[1][1] * full[2][0]) == 0
                        && ((full[0][2] - 1) * (full[1][1] - 1) * (full[2][0] - 1)) == -1)
                        val[i][j] = val[i][j] + 2;
                }
            }
        }
    }
}
function ai() {
    if (judge() == true) {
        return;
    }
    //挑选权值最大的
    resetValue();
    var mi = 0, mj = 0, temp = 0;
    for (var i = 0; i < 3; i++)
        for (var j = 0; j < 3; j++) {
            if (val[i][j] > temp) {
                temp = val[i][j];
                mi = i;
                mj = j;
            }
        }
    full[mi][mj] = 2;
    num1 = (mi * 3 + mj + 1) + "";
    document.getElementById(num1).value = "O";
    if (judge() == true) {
        return;
    }
}
function lose() {
    window.alert("you lose");
    location.reload();
}

function tttagain() {
    // baseX=-210;
    // console.log(baseX);
    // location.reload(); 
    full = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    allplace.forEach((element) => {
        element.value = '';
        console.log(123);
    })
}