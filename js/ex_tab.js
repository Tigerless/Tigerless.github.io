window.onload = function () {
    var mytabs = document.getElementsByClassName("body3_item");
    var mytab = mytabs[0].getElementsByTagName("div");
    var patent = document.getElementById("patent");
    var copyright = document.getElementById("copyright");

    console.log(mytab.length)

    for(var i = 0;i<mytab.length;i++){
        mytab[i].getElementsByTagName("a")[0].indexs = i;
        mytab[i].getElementsByTagName("a")[0].onclick = function () {
            for(var j = 0;j<mytab.length;j++){
                mytab[j].className = "publication_button";

            }
            mytab[this.indexs].className = "body3_get";
            if(this.indexs%2 === 0){
                patent.className = "display";
                copyright.className = "";
            }
            else{
                patent.className = "";
                copyright.className = "display";
            }
        }
    }

}


