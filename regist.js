function checkName(data)
{
    if(data === "")
    {
        alert("!! Bạn chưa nhập họ và tên !!");
        return false;
    }
    return true;
}
function checkPhone(data)
{
    if(isNaN(data))
    {
        alert("!! Bạn nhập sai kiểu dữ liệu điện thoại !!");
        return false;
    }
    else if(data === "")
    {
        alert("!! Bạn chưa nhập số điện thoại !!");
        return false;
    }
    return true;
}
function checkBirth(data)
{
    if (!data) {
    alert("!! Bạn chưa nhập ngày sinh !!");
    return false;
}
var curr = new Date();
var old = new Date(data);
var checkYear = curr.getFullYear() - old.getFullYear();;
if(checkYear < 18)
{
    alert("!! Bạn phải trên 18 tuổi !!");
    return false;
}
return true
}
function sumTicket(data)
{
    if(data == "VIP")
    {
        return 9.800;
    }
    else if(data == "PLATINUM")  
    {
        return 7.800;
    } 
    else if(data == "CAT 1")
    {
        return 6.800;
    }
    else if(data == "CAT 2")
    {
        return 5.800;
    }
    else
    {
        return 3.800;
    }
}

function regist(event)
{
    event.preventDefault();
    var name = document.getElementById("yourName").value;
    var birthday = document.getElementById("yourBirth").value;//2004-23-07
    var phone = document.getElementById("yourPhone").value;
    var selectTicket = document.getElementById("ticket").value;
    if(!checkName(name) || !checkPhone(phone) ||  !checkBirth(birthday))
    {
        return;
    }
    else{
        var appearSuccess = document.getElementById('success');
        appearSuccess.style.display="block";
        var betweenPlace = document.getElementById('displayMode');
        betweenPlace.style.display = "none";
        var costs = sumTicket(selectTicket);
        var amountTicket = document.getElementById("numTicket").value;
        var money = costs * amountTicket;
        var payBILLs = document.getElementById("payBill").value;
        document.getElementById("nameCustom").innerHTML = name;
        document.getElementById("phoneCustom").innerHTML = phone;
        document.getElementById("birthCustom").innerHTML = birthday;
        document.getElementById("styleTicket").innerHTML = 
        "<br>" + " Loại vé: " + selectTicket +
        "<br>" + "Số lượng vé: " + amountTicket+
        "<br>" + "Thành tiền" + money + "triệu VND" +
        "<br>";
        document.getElementById("payCustom").innerHTML = payBILLs;
    }
}