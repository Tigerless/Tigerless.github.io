window.onload = function () {
    var mytabs = document.getElementsByClassName("body3_item");
    var mytab = mytabs[0].getElementsByTagName("div");

    var Paper = document.getElementById("Paper");
    var patent = document.getElementById("patent");
    var copyright = document.getElementById("copyright");
    var Awards = document.getElementById("Awards");

    console.log(mytab.length)

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


