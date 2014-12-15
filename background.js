
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
	chrome.tabs.create
	(
		{
			url:"http://www.baidu.com/s?wd="+input,
		}

	);
    
    chrome.tabs.create
	(
		{
			url:"https://www.google.com/#safe=strict&q="+input,
		}

	);
    
    chrome.tabs.create
	(
		{
			url:"https://www.bing.com/search?q="+input,
		}

	);
};