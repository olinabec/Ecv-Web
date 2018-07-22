// 1. 写一个页面，实现求和的功能
// 2. 写一个页面，用户从终端或浏览器输入一段文字，如果是合法的整数，根据奇偶性输出奇数或偶数，否则输出不是整数。
// 	提示：内置函数 parseInt 能够将一个字符串尝试转换成整数。
// 3. 实现一个函数 getSecond(n)，给定一个数组 arr，返回该数组中第二大的数。
// 	比如 arr = [1, 3, 5, 4, 2]，返回结果为 4。	
// 使用基础HTML即可，有能力的同学可以使用css进行排版和修饰

var $ = document;
var reg = new RegExp("^[0-9]*$");

$.addEventListener("DOMContentLoaded", function()
{
    //question 1
    var sumButton = $.getElementById("sum_button");
    var result = $.getElementById("result");
    var firstNumber = $.getElementById("first_number");
    var secondNumber = $.getElementById("second_number");

    sumButton.addEventListener("click", ()=>
    {
        var first = $.getElementById("first_number");
        console.log("first", first.value);
        firstNumber = $.getElementById("first_number").value;
        secondNumber = $.getElementById("second_number").value;
        if(firstNumber != "" && secondNumber !="")
        {
            var sum = parseInt(firstNumber) + parseInt(secondNumber);
            result.innerHTML = "Result: " + firstNumber + " + "+ secondNumber + " = " + sum;
        }
        else
        {
            result.innerHTML = "Please enter the numbers";
        }
    });

    $.getElementById("first_number").addEventListener("keyup", (x) =>{
        ValidateNumber(firstNumber);
    });

    $.getElementById("second_number").addEventListener("keyup", (x) =>{
        ValidateNumber(secondNumber);
    });



    // question2
    $.getElementById("calculate_odd_or_even").addEventListener("click", ()=>{
        var oddOrEvenInput = $.getElementById("number_input");
        var resultControl = $.getElementById("qustion2_result")
        console.log(oddOrEvenInput.value);
        if(oddOrEvenInput.value != "" && reg.test(oddOrEvenInput.value))
        {
            var inputNumber = parseInt(oddOrEvenInput.value)
            if(IsOdd(inputNumber))
            {
                resultControl.innerHTML = "Result: This is a odd number";
            }
            else
            {
                resultControl.innerHTML = "Result: This is a even number";
            }
        }
        else
        {
            resultControl.innerHTML = "Result: Not a int number.";
        }
    });




    //question 3
    $.getElementById("get_the_second_number").addEventListener("click", ()=>{
        var stringArray = $.getElementById("string_array").value;
        var myArray = stringArray.split(',');
        var intArray = [];
        myArray.forEach(element => {
            //string Array to int Array
            intArray.push(parseInt(element));
        });
        var theSecondNumber = GetTheSecondBigNumber(intArray);
        $.getElementById("qustion3_result").innerHTML = "Result: The second big number is:" + theSecondNumber;
    });
});

    function ValidateNumber(textBox)
    {
        if(!reg.test(textBox.value))
        {
            textBox.style.background = "red";
        }
        else
        {
            textBox.style.background = "white";
        }
    }


function IsOdd(number)
{
    if(number % 2 == 0)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function GetTheSecondBigNumber(intArray)
{
    var max = Math.max(...intArray);
    var times = countOccurences(intArray, max);
    var times2 = countTimeOfNumberInArray(intArray, max)
    console.log("times:", times);
    console.log("times2:", times2);
    for(i = 0; i<times; i++)
    {
        intArray.splice(intArray.indexOf(max), 1);
    }

    var max = Math.max(...intArray);
    return max;
}

const countOccurences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);

function countTimeOfNumberInArray(arr, number)
{
    debugger;
    var count = 0;
    arr.forEach((x, index, newArr)=>
    {
        if (x == number)
        {
            newArr = arr.splice(x);
        }
    });

}
