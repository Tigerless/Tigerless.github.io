window.onload = function () {
    var mytabs = document.getElementsByClassName("body3_item");
    var navs = document.getElementsByClassName("header_items");

    var mytab = mytabs[0].getElementsByTagName("div");
    var nav = navs[0].getElementsByTagName("a");

    var Paper = document.getElementById("Paper");
    var patent = document.getElementById("patent");
    var copyright = document.getElementById("copyright");
    var Awards = document.getElementById("Awards");

    console.log("nav:::"+nav.length)
    for(var i2 = 0;i2<nav.length;i2++) {
        nav[i2].indexs = i2;
        nav[i2].onclick = function () {

            for(var j2 = 0;j2<nav.length;j2++){
                nav[j2].className = "";
            }
            nav[this.indexs].className = "choose";

        }
    }


    for(var i = 0;i<mytab.length;i++){
        mytab[i].getElementsByTagName("a")[0].indexs = i;
        mytab[i].getElementsByTagName("a")[0].onclick = function () {

            for(var j = 0;j<mytab.length;j++){
                mytab[j].className = "publication_button";
            }
            mytab[this.indexs].className = "body3_get";

            Paper.className = "display";
            patent.className = "display";
            copyright.className = "display";
            Awards.className = "display";

            if(this.indexs === 0){
                Paper.className = "";
            }
            if(this.indexs === 1){
                patent.className = "";
            }
            if(this.indexs === 2){
                copyright.className = "";
            }
            if(this.indexs === 3){
                Awards.className = "";
            }

        }
    }

}


