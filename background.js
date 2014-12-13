
chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse)
    {
        switch(request.command)
        {
            case "start":
            	openTab(request.input);
                break;
        }

        return true;
    }
);

var openTab=function(input)
{
	chrome.windows.create
	(
		{
			url:"http://www.baidu.com/s?wd="+input,
		}

	);
};