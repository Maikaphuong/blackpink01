
function resetImage()
{
    document.getElementById("flower-set").src = "https://i.pinimg.com/564x/e4/a3/ea/e4a3eaa81d4a1cba7d4ff45ad9c47f30.jpg";
    document.getElementById("flower-set").setAttribute("value","none");
    document.getElementById("showName").innerHTML ="None";
}
function changeImage(what_color) {
    var type_Flower = document.getElementById("flower").value;
    var flowerImage = document.getElementById("flower-set");

    if (type_Flower == "Tulip") {
        if (what_color == "Red") 
        {
            flowerImage.src = "https://i.pinimg.com/564x/c4/89/0c/c4890cfbb1cde5e29841f94d7d10e089.jpg";
            flowerImage.setAttribute("value", "red-tulip");
            document.getElementById("showName").innerHTML ="Red"; 
        } else if (what_color == "White") 
        {
            document.getElementById("showName").innerHTML ="White"; 
            flowerImage.src = "https://i.pinimg.com/564x/26/b7/d0/26b7d0f313611aa6fa87fc12a9928269.jpg";
            flowerImage.setAttribute("value", "white-tulip");
        } else if (what_color == "Yellow")
        {
            document.getElementById("showName").innerHTML ="Yellow"; 
            flowerImage.src = "https://i.pinimg.com/564x/df/c3/4d/dfc34d7c443ea4fdc89f3b4e94fdb27e.jpg";
            flowerImage.setAttribute("value", "yellow-tulip");
        } else if (what_color == "Pink") 
        {
            document.getElementById("showName").innerHTML ="Pink"; 
            flowerImage.src = "https://i.pinimg.com/564x/bd/6a/ec/bd6aec14520f3b5763ac221063db719e.jpg";
            flowerImage.setAttribute("value", "pink-tulip");
        } else 
        { // purple
            document.getElementById("showName").innerHTML ="Purple";
            flowerImage.src = "https://i.pinimg.com/564x/4d/41/fa/4d41fa01a0d9a7932d4ff5681c90d515.jpg";
            flowerImage.setAttribute("value", "purple-tulip");
        }
    } else if (type_Flower == "Rose")
    {
        if (what_color == "Red") 
        {
            flowerImage.src = "https://i.pinimg.com/564x/36/fc/9d/36fc9d5ca58b091eda2b082346f09510.jpg";
            flowerImage.setAttribute("value", "red-rose");
            document.getElementById("showName").innerHTML ="Red"; 
        } else if (what_color == "White") 
        {
            document.getElementById("showName").innerHTML ="White"; 
            flowerImage.src = "https://i.pinimg.com/564x/b3/2e/c5/b32ec504dc7fbe2e5b12988957681938.jpg";
            flowerImage.setAttribute("value", "white-rose");
        } else if (what_color == "Yellow")
        {
            document.getElementById("showName").innerHTML ="Yellow"; 
            flowerImage.src = "https://i.pinimg.com/564x/5c/c8/51/5cc851c7bd99a4b57ccc0ea7194d013b.jpg";
            flowerImage.setAttribute("value", "yellow-rose");
        } else if (what_color == "Pink") 
        {
            document.getElementById("showName").innerHTML ="Pink"; 
            flowerImage.src = "https://i.pinimg.com/564x/9a/a0/4c/9aa04c75bdbb2973c7e242dfb79a4d1d.jpg";
            flowerImage.setAttribute("value", "pink-rose");
        } else 
        { // purple
            document.getElementById("showName").innerHTML ="Purple"; 
            flowerImage.src = "https://i.pinimg.com/564x/99/b8/7b/99b87b2baf20244aecad275eb0917484.jpg";
            flowerImage.setAttribute("value", "purple-rose");
        }
    } else if (type_Flower == "Lavender") {
        // Update image source for Lavender
        if (what_color == "Red") 
        {
            flowerImage.src = "https://i.pinimg.com/564x/5d/bf/ef/5dbfef15d79a725a0839c9a9d5a8cd17.jpg";
            flowerImage.setAttribute("value", "red-Lavender");
            document.getElementById("showName").innerHTML ="Red"; 
        } else if (what_color == "White") 
        {
            document.getElementById("showName").innerHTML ="White"; 
            flowerImage.src = "https://i.pinimg.com/564x/68/7d/47/687d476687f5c6613bda88dc35efb162.jpg";
            flowerImage.setAttribute("value", "white-Lavender");
        } else if (what_color == "Yellow")
        {
            resetImage();
        } else if (what_color == "Pink") 
        {
            document.getElementById("showName").innerHTML ="Pink"; 
            flowerImage.src = "https://i.pinimg.com/564x/9e/d3/2c/9ed32ccc3a11cc949c42aaea22a6b997.jpg";
            flowerImage.setAttribute("value", "pink-Lavender");
        } else 
        { // purple
            document.getElementById("showName").innerHTML ="Purple"; 
            flowerImage.src = "https://i.pinimg.com/564x/25/b7/9f/25b79fb0ebd5a7ae4f3906ca1c82a548.jpg";
            flowerImage.setAttribute("value", "purple-Lavender");
        }
    } else {
        // Update image source for Daisy
    }
}
