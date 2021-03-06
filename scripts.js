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
var product5 = new Product("DDR4 3000MHz Vengeance LPX White","Vengeance LPX memory is designed for high-performance overclocking. The heatspreader is made of pure aluminum for faster heat dissipation, and the eight-layer PCB helps manage heat and provides superior overclocking headroom",219,"pic5.jpg",false);
var product6 = new Product("Team 16GB Elite 2666MHz DDR4 RAM","Team 16GB (1x16GB) TED416G2666C1902 Elite 2666MHz DDR4 RAM",99,"pic6.jpg",false);
var product7 = new Product("ADATA Ultimate SU650 120GB Internal SSD","The ADATA Ultimate SU650 Internal SSD delivers read and write speeds of up to 520 and 420 MB/s* respectively, making it perfect for relocating large files like Blu-ray movies, gaming software, surveillance footage, and more.",56,"pic7.jpg",true);
var product8 = new Product("WD 120G Green M.2 SSD","For fast performance and reliability, WD Green SSDs boost the everyday computing experience in your desktop or laptop PC.",30,"pic8.jpg",false);
var product9 = new Product("WD 240G Green M.2 SSD (G2 Version)","With the performance boost from a WD Green SATA SSD, you can browse the web, play a game, or simply start your system in a flash.",48,"pic9.jpg",false);
var product10 = new Product("Galax GeForce RTX 3070 1-Click OC 8G Graphics Card","For the OC series, we have an innovative fan design that creates a new trend in GPU cooling with the 102mm twin fans along with our proprietary Fan Blade - ???Wings???. 11 fan blades being extraordinary, not only for the exquisite look but also providing high air flow and air pressure at minimum noise level.",1699,"pic10.jpg",false);
var product11 = new Product("Asus GeForce 2GB GDDR5 Video Card","ASUS GeForce GT 710 great value graphics with passive 0dB efficient cooling. Silent passive cooling means true 0dB - perfect for quiet home theatre PCs and multimedia centres. Industry only AUTO-EXTREME Technology, 100% full automation for best reliability.",69,"pic11.jpg",false);
var product12 = new Product("Gigabyte GeForce RTX 2060 R2.0 6G OC Graphics Card","GeForce RTX??? 2060 OC 6G(2.0)GeForce RTX??? 2060 OC 6G(2.0)GeForce RTX??? 2060 OC 6G(2.0)GeForce RTX??? 2060 OC(2.0)GeForce RTX??? 2060 OC(2.0)GeForce RTX??? 2060 OC(2.0)GeForce RTX??? 2060 OC(2.0)GeForce RTX??? 2060 OC(2.0)",799,"pic12.jpg",false);
var product13 = new Product("Asus Prime B450M-A mATX Motherboard","Fan Xpert 2+: Flexible controls for ultimate cooling and silence, plus GPU-temperature sensing for cooler gaming. Ultrafast connectivity: Supreme flexibility with USB 3.1 Gen 2 and native M.2. ASUS Aura Sync header: Onboard connector for RGB LED strips, easily synced with an ever-growing portfolio of Aura Sync-capable hardware.",105,"pic13.jpg",false);
var product14 = new Product("Asus Prime Z390M Plus Motherboard","OptiMem II: Careful routing of traces and vias, plus ground layer optimizations to preserve signal integrity for improved memory overclocking. Enhanced power solution: Premium components provide better power efficiency. Industry-leading cooling options: Comprehensive controls for fans and AIO pump, via Fan Xpert 4 or the acclaimed UEFI.",209,"pic14.jpg",false);
var product15 = new Product("","AM4 socket: Ready for 2nd and 3rd Gen AMD Ryzen processors to maximize connectivity and speed with up to two M.2 Drives, USB 3.2 Gen2 and AMD StoreMI. Aura Sync RGB: ASUS-exclusive Aura Sync RGB lighting, including RGB headers and addressable Gen 2 GRB headers. Optimal Power Solution: 12+4 power stages with ProCool II power connector, alloy chokes and durable capacitors to support multi-core processors.",415,"pic15.jpg",false);
var productlist = [product1,product2,product3,product4,product5,product6,product7,product8,product9,product10,product11,product12,product13,product14,product15]
var taglist = ["tag1","tag2","tag3","tag4","tag5","tag6","tag7","tag8","tag9","tag10","tag11","tag12","tag13","tag14","tag15"]
var piclist = ["pic1","pic2","pic3","pic4","pic5","pic6","pic7","pic8","pic9","pic10","pic11","pic12","pic13","pic14","pic15"]

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

function validate(){
    var uname= document.getElementById("uName");
    var address= document.getElementById("address");
    var email= document.getElementById("email");
    var DOB= document.getElementById("DOB");
    var tel= document.getElementById("tel");
    var pword=document.getElementById("pword");
    var pword2=document.getElementById("pword2");
    var noinput = "";
    var ch_Uname = ch_Add = ch_Email = ch_DOB = ch_Pnum = ch_Pword = false
    if (uname.value==noinput||uname.value==null)
    {
        uname.style.border="solid 3px red"
        document.getElementById("lbluser").style.visibility="visible";
    }
    else
    { 
        uname.style.border="solid 3px white"
        document.getElementById("lbluser").style.visibility="hidden";
        ch_Uname = true;
    }
    if (address.value==noinput||address.value==null)
    {
        address.style.border="solid 3px red"
        document.getElementById("lbladdress").style.visibility="visible";
    }
    else
    {   
        address.style.border="solid 3px white"
        document.getElementById("lbladdress").style.visibility="hidden";
        ch_Add = true;
    }
    if (email.value==noinput||email.value==null)
    {
        email.style.border="solid 3px red"
        document.getElementById("lblemail").style.visibility="visible";
        
    }
    else
    { 
        email.style.border="solid 3px white"
        document.getElementById("lblemail").style.visibility="hidden";
        ch_Email = true;
    }
    if (DOB.value==noinput||DOB.value==null)
    {
        DOB.style.border="solid 3px red"
        document.getElementById("lblDOB").style.visibility="visible";
    }
    else
    { 
        DOB.style.border="solid 3px white"
        document.getElementById("lblDOB").style.visibility="hidden";
        ch_DOB=true;
    }
    if (tel.value==noinput||tel.value==null)
    {
        tel.style.border="solid 3px red"
        document.getElementById("lbltel").style.visibility="visible";
    }
    else
    { 
        tel.style.border="solid 3px white"
        document.getElementById("lbltel").style.visibility="hidden";
        ch_Pnum=true;
    }
    if (pword.value==noinput||pword.value==null)
    {   
        pword.style.border="solid 3px red"
        document.getElementById("lblpword").style.visibility="visible";
    }
    else
    { 
        pword.style.border="solid 3px white"
        document.getElementById("lblpword").style.visibility="hidden";
    }
    if (pword2.value==noinput||pword2.value==null)
    {   
        pword2.style.border="solid 3px red"
        document.getElementById("lblpword2").style.visibility="visible";
        document.getElementById("lblpword2").innerHTML="Invalid Input"
    }
    else if (pword2.value!=pword.value){
        pword2.style.border="solid 3px red"
        document.getElementById("lblpword2").innerHTML="Password don't match"
        document.getElementById("lblpword2").style.visibility="visible";

    }
    else
    { 
        pword2.style.border="solid 3px white"
        document.getElementById("lblpword2").style.visibility="hidden";
        ch_Pword=true;
    }
    if(ch_Uname==true && ch_Add==true && ch_Email==true && ch_DOB==true && ch_Pnum==true && ch_Pword==true){
        alert("form submitted")
    }
    else{
        var ch_Uname = ch_Add = ch_Email = ch_DOB = ch_Pnum = ch_Pword = false
        return
    }
}