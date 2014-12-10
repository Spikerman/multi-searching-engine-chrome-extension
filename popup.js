window.onload=function()
{
	document.getElementById("submit").onclick=function()
    {
        chrome.extension.sendMessage({command:"start"});
    }
}