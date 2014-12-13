var Istore=localStorage.input || '';
window.onload=function()
{
   
    document.getElementById("submit").onclick=function()
    
    {
        var input=Istore;
        chrome.extension.sendMessage({command:"start",input:input});
    }

}