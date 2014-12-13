
chrome.extension.onMessage.addListener(
    function(request,sender,sendResponse)
    {
        switch(request.command)
        {
            case "command":
            	openTab();
            break;
        }

        return true;
    }
);

var openTab=function()
{
	chrome.windows.create
	(
		{
			url:"http://www.baidu.com",
			tabId:1
		}

	);
};