
window.onload = function() {
    document.documentElement.className = "theme3";
    const currNum = document.querySelector(".inner1 .curr-num")
    const screen = document.querySelector(".inner1 .expression")
    const operators = document.querySelectorAll(".operator")
    const add = document.querySelector(".add")
    const subtract = document.querySelector(".subtract")
    const divide = document.querySelector(".divide")
    const multiply = document.querySelector(".multiply")
    const result = document.querySelector(".result");
    const reset = document.querySelector(".reset")
    const del = document.querySelector(".del")
    const circle = document.querySelector(".circle")
    let expression="";
    const keys = document.querySelectorAll(".key")
    const body = document.querySelector("body")
    function clean(number) {
        if(number.length>9) {
            if(number>=1000000000) {
                number = number.slice(0,1)+"."+number.slice(1,9) + "E" + (number.length-1).toString()
            }
            else {
                number = number.toString().slice(0,9)
            }
        }
        return number
    }
    keys.forEach(element => element.addEventListener('click', event => {
        if(/^[0-9]+(\.)?[0-9]*$/.test(currNum.innerText + element.innerText)) {
            currNum.innerText = clean(currNum.innerText + element.innerText)
        }
    }))
    operators.forEach(operator => operator.addEventListener('click', () => {
        const number = parseFloat(currNum.innerText).toString()
        currNum.innerText = ""
        expression = expression+number+(operator.innerText=="x"? "*":operator.innerText)

        screen.innerText = expression;
        // console.log(expression)
    }))
    result.addEventListener("click", () => {
        let evaluation = eval(expression+parseFloat(currNum.innerText))
        let evalString = clean(evaluation.toString())
        currNum.innerText = evalString
        screen.innerText = ""
        expression = ""
    })
    reset.addEventListener("click", event => {
        currNum.innerText = ""
        screen.innerText = ""
        expression = ""
    })
    del.addEventListener("click", event => {
        currNum.innerText =  currNum.innerText.slice(0, -1)
    })

    circle.addEventListener("click", event => {
        body.style.backgroundColor = "hsl(0, 0%, 90%)";
    })

}