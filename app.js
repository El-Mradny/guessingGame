// Create random array with unique element for first row
let firstRow = []
while(firstRow.length < 5){
    var r = Math.floor(Math.random() * 5) + 1;
    if(firstRow.indexOf(r) === -1) firstRow.push(r);
}
// Create random array with unique element for second row
let secondRow = []
while(secondRow.length < 5){
    var r = Math.floor(Math.random() * 5) + 1;
    if(secondRow.indexOf(r) === -1) secondRow.push(r);
}

// create function for first Row of images
let flag = ""
function readFirstImage(k){
    let hint = document.getElementById("hints")
    if (flag == ""){
        let imageName = firstRow[k-1];
        let imgId = document.getElementById(`${k}`);
        imgId.src = `images/${imageName}.jpg`;
        flag = imageName;
        hint.innerHTML = " "
    }else{
        hint.innerHTML ="You already clicked an image from this row, please move to the next row."
        hint.style.color = "red"
    }
}

// create function for second Row of images
function readSecondImage(k){
    let hint = document.getElementById("hints")
    let imageName = secondRow[k-6];
    let imgId = document.getElementById(`${k}`);
    if (flag == ""){
        hint.innerHTML ="First, you need to click an image from the first row.";
        hint.style.color = "red";
    }else{
        if (flag === imageName){
            imgId.src = `images/${imageName}.jpg`;
            hint.innerHTML = "";
            hint.innerHTML ="Congrats! You revealed anthor image";
            hint.style.color = "green";
            flag = "";
        }else {
            hint.innerHTML = "Please try anthor photo";
            hint.style.color = "black";
        }
    }
}