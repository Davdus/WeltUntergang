$(document).ready(function(){

    $(".button").click(function(){
        $(".log").toggle();
    });
});/**
 * Created by Davdus on 20.03.2017.
 */
function onclickVariation(object){
    //generiere array von class button und log
    var buttons = document.getElementsByClassName("button");
    var logs = document.getElementsByClassName("log");
    var ii;
    //loope durch um index des gedrückten buttons zu finden
    for(i = 0; i < buttons.length; i++){
        if(buttons[i] == object){
            ii = i;
            break;
        }
    }
    //index von button = index von log weil sie nacheinander generiert werden
    var target = logs[ii].style.display;
    //prüfe den momentanen status und setze ihn auf den gegenteiligen
    if(target == "none")
        target = "block";
    else
        target = "none";
}

window.onload{
    var link = document.createElement("link");
    link.href = "../autist.png";
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
}