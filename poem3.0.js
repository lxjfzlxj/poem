// ==UserScript==
// @name         poem 3.0
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://poem.rotriw.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var sou=new Array;
var mp=[],tot=0,zf=[];
    var kuleng=0;
for(var i=0;localStorage.getItem(i)!=null;i++) sou.push(localStorage.getItem(i)),kuleng=i+1;
for(i=0;i<sou.length;i++) {
    for(var j=0;sou[i][j];j++) {
        if(!mp[sou[i][j]]) mp[sou[i][j]]=++tot, zf[tot]=sou[i];
    }
}
//var tp=zf[mp["长"]];
//for(i=0;i<tp.length;i++) console.log(tp[i]);
console.log(1);
var las="";
// for(var va=1;va<=100;va++) {
	function nu(){
		// console.log(str[pos+64]);
        var swilerning=1,swianswering=0;
        if(swilerning) {
        console.log("start learning...");//
        var ler=document.getElementsByClassName("poem")[2].innerHTML.slice(1);//
        console.log(ler);//
        var id;//
        for(id=0;id<sou.length && sou[id]!=ler;id++);//
        if(id==sou.length) {//
            console.log("learning successful!");//
            sou.push(ler); localStorage.setItem(kuleng,ler); kuleng++;//
            console.log(sou.length);//
        } else {console.log("old poem");}//
        console.log("now size:");//
        console.log(sou.length);//
        }
        /*var ch;
        function waitwzs() {
            if(document.getElementById("problem_head").innerHTML[0]=="题") {
              console.log(document.getElementById("problem").innerHTML);
            var tp=document.getElementById("problem_now").innerHTML;
            //console.log("I'm working..");
            if(tp!=0 && tp!=las) {
             //   console.log(las+""+tp);
                las=tp, ch=tp, console.log("!!!"+ch), clearInterval(setival);
            }
            }
        }
        var setival=setInterval(waitwzs,300);*/
        //var fl=0;
		//for(var i=0;i<sou.length;i++) if(las!=i) {
			//for(var j=0;sou[i][j] && sou[i][j]!=str[pos+64];j++);

			//if(sou[i][j]) {
				//console.log(sou[i][j]);
				//console.log(sou[i]);
				//var ans=sou[i];
				// var ans_n=-1;
				// for(var k=0;k<j;k++) ans[++ans_n]=sou[i][k];
				// ans[++ans_n]='（'; ans[++ans_n]='）';
				// for(k=j+1;sou[i][k];k++) ans[++ans_n]=sou[i][k];
				// var s=ans.toString();
				//console.log(ans);
				//ans=sou[i].substring(0,j)+"（）"+sou[i].substring(j+1);
				//console.log(ans);
				//document.getElementById("answer").value=ans;
                //fl=1; las=i;
				//break;
			//}
		//}
        if(swianswering==1) {
        ch=document.getElementById("problem_now").innerHTML;
		if(mp[ch]!=undefined) {
            //console.log("c:"+mp[str[pos+64]]);
            var tp=zf[mp[ch]];
            for(i=0;i<tp.length && tp[i]!=ch;i++);
            console.log(tp);
            tp=tp.substring(0,i)+"（）"+tp.substring(i+1);
            console.log(tp);
            document.getElementById("answer").value=tp;
            document.getElementById("submit").click();
        }
        else console.log("cannot find legal poems");
        }
    }
	setInterval(nu,3000);
    // Your code here...
})();