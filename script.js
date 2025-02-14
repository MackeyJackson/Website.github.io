let count = 0;
let block = false
const button = document.getElementById("No");
const button2 = document.getElementById("Yes");
const letter = document.getElementById("letterB");
const image = document.getElementById("cat");
let running = false
console.log("hiiii")
button.addEventListener("click", function() {
    if (block === false){
    count++;
    }
    // Toggle the image source
    if (image.src.includes("Cat.jpg") && count == 1) {
        image.src = "Cat2.jpg";
        document.getElementById("speech").style.visibility = "Visible"
        document.getElementById("text").textContent = 'Wrong answer!'
    }
    if (count == 2){
        document.getElementById("text").textContent = 'This button!!!'
        document.getElementById("arrow").style.visibility = "Visible"
    }
    if (count == 3 && running === false) {
        running = true
        block = true
        document.getElementById("text").textContent = '...';
        setTimeout(function() {
            document.getElementById("text").textContent = 'your';
        }, 2000); 

        setTimeout(function() {
            document.getElementById("text").textContent = 'your finger';
        }, 2200);  
        setTimeout(function() {
            document.getElementById("text").textContent = 'must';
        }, 2400);
        setTimeout(function() {
            document.getElementById("text").textContent = 'must be';
        }, 2600); 
        setTimeout(function() {
            document.getElementById("text").textContent = 'must be broken.';
        }, 2800);      

        setTimeout(function() {
            document.getElementById("text").textContent = 'let';
        }, 3300);
        setTimeout(function() {
            document.getElementById("text").textContent = 'let me';
        }, 3400); 
        setTimeout(function() {
            document.getElementById("text").textContent = 'let me change';
        }, 3600); 
        setTimeout(function() {
            document.getElementById("text").textContent = 'this';
        }, 3800); 
        setTimeout(function() {
            document.getElementById("text").textContent = 'this to';
        }, 3900); 
        setTimeout(function() {
            document.getElementById("text").textContent = 'this to yes :)';
        }, 4100); 
        setTimeout(function() {
            document.getElementById("No").textContent = "yes!"
        }, 4300); 
        setTimeout(function() {
            block = false
            running = true
        }, 4300); 
    }
    if (count == 4) {
        image.src = "Cat3.jpg";
        document.getElementById("arrow").style.visibility = "hidden"
        document.getElementById("text").textContent = 'yayayayay'
        letter.style.visibility = "Visible"
    }
});

button2.addEventListener("click", function() {
    if (block === false){
    image.src = "Cat3.jpg";
    document.getElementById("speech").style.visibility = "Visible"
    document.getElementById("arrow").style.visibility = "hidden"
    document.getElementById("text").textContent = 'yayayayay'
    letter.style.visibility = "Visible"
    }
});

letter.addEventListener("click", function() {
    document.getElementById("letter").style.visibility = "Visible"
});
