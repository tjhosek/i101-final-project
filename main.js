function arrow(){
    var image = document.getElementById("datavizImage")
    if (image.src.match("i101_viz1.png")){
        image.src = "i101_viz2.png";
    } else {
        image.src = "i101_viz1.png"
    }
}