class Product{
    constructor(name,description,price,pic,onsale){
        this.name = name;
        this.description = description;
        this.price = price;
        this.pic = pic
        this.onsale= onsale
    }
}

var product1 = new Product("AMD Ryzen 9 5900X Desktop CPU","A formidable upgrade to your desktop system, the AMD Ryzen 9 5900X Desktop CPU offers powerful computing performance to handle heavy-load applications and multi-threaded tasks, such as content creation, video encoding, and gaming.",859,"pic1.jpg",true);
var product2 = new Product("Intel Core i7-10700k Boxed Processor","The Intel Core i7- 10700K Boxed Processor offers fast performance and advanced technologies, including Turbo Boost 2.0, Hyper-Threading, and Virtualization, making it a formidable upgrade for your compatible system or a great option for building a new setup.",539,"pic2.jpg",false);
var product3 = new Product("AMD Ryzen 9 5950X Desktop CPU","Keeping the pace with intensive multi-processing applications and hardcore video gaming, the AMD Ryzen 9 5950X Desktop CPU delivers excellent computing performance without sacrificing power-efficiency.",1249,"pic3.jpg",false);
var product4 = new Product("ADATA XPG Spectrix D60G 16GB Memory Kit","Satisfying e-sports players with that they need, the ADATA XPG Spectrix D60G DDR4 RGB 3600MHz 16GB Memory Kit (2x8GB) features a wide frequency range for fluid overclocking performance and a unique RGB strip to light up the battlefield.",209,"pic4.jpg",true);
var product7 = new Product("ADATA Ultimate SU650 120GB Internal SSD","The ADATA Ultimate SU650 Internal SSD delivers read and write speeds of up to 520 and 420 MB/s* respectively, making it perfect for relocating large files like Blu-ray movies, gaming software, surveillance footage, and more.",56,"pic7.jpg",true);
var productlist = [product1,product2,product3,product4,product7]
var taglist = ["tag1","tag2","tag3","tag4","tag7"]
var piclist = ["pic1","pic2","pic3","pic4","pic7"]

function index()
{
    for(var i=0; productlist.length;i++){
    document.getElementById(taglist[i]).innerHTML=
    "<h3>"+productlist[i].name+"</h3><br>"+
    "<p>"+productlist[i].description+"</p><br>"+
    "<p>$"+productlist[i].price+"</p><br>";
    document.getElementById(piclist[i]).src=productlist[i].pic;
}
}

function on_sale()
{
    for(var i=0; productlist.length;i++){
      if(productlist[i].onsale==true){
        productprice=productlist[i].price*.9
        document.getElementById(taglist[i]).innerHTML=
        "<h3>"+productlist[i].name+"</h3><br>"+
        "<p>"+productlist[i].description+"</p><br>"+
        "<p>Special $"+Math.ceil(productprice)+"</p><br>";
        document.getElementById(piclist[i]).src=productlist[i].pic;
}
}
}

function formValidation() {
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var uemail = document.registration.email;
    var ValidateDateofBirth = document.registration.dateofbirth;
    var ufsex = document.registration.fsex;
        if (allLetter(uname)) {
            if (alphanumeric(uadd)) {
                if (ValidateEmail(uemail)) {
                    if (allnumeric(uzip)) {
                        if (validsex(umsex, ufsex)) {}
                            }
                        }
                    }
                }
                return false;
            }





function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    }
    else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}

function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
        return true;
    }
    else {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

function ValidateDateofBirth (date) {
    var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    if (pattern.test(str_input_date)) {
        alert("valid date");
        dateofbirth.focus()
        return false;
    }
    return true;

}

function allnumeric(uphone) {
    var numbers = /^[0-9]+$/;
    if (uphone.value <1 (uphone)) {
        return true;
    }
    else {
        alert ("Enter Country Code");
        uphone.focus();
        return false;
    }

}

function passid_validation(passid, mx, my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        passid.focus();
        return false;
    }
    return true;
}
