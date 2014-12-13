
chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse)
    {
        switch(request.command)
        {
            case "start":
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
		}

	);
};