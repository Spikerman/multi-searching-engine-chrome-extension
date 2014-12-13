window.onload=function()
{
	localStorage.input=document.getElementById("search").value；
    
    document.getElementById("submit").onclick=function()
    {
        chrome.extension.sendMessage({command:"start",input:localStorage.input});
    }
}