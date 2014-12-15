//var Istore=localStorage.input;
window.onload=function()
{
   
    document.getElementById("submit").onclick=function()
    
    {
        var search=document.getElementById("search");
        var input=search.value;
        chrome.runtime.sendMessage({command:"start",input:input});
    }

}