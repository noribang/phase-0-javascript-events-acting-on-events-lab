// Your code here
const dodger = document.getElementById("dodger")

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)

    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight() {
    // Access #dodger style left attribute and replace
    // left value "px" with "".
    const leftNumbers = dodger.style.left.replace("px", "")
    // Convert leftNumbers to integer type base 10.
    const left = parseInt(leftNumbers, 10)
    // If current left value is less than 
    // width of parent div - width of dodger div  
    // (i.e. 400px - 40px) increment + 1.
        if (left < 360) {
            // console.log("Move Right + 1")
            dodger.style.left = `${left + 1}px`
            console.log("Currently: ", dodger.style.left)
    }
}

document.addEventListener('keydown', function(e) {
    // debugger
    // console.log(e)
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
    if (e.key === "ArrowRight") {
        // console.log("Moved right...")
        moveDodgerRight()
    }
})