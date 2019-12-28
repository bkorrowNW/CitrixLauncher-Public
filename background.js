//chrome.management.launchApp("haiffjcadagjlijoggckpgfnoeiflnem");
chrome.webNavigation.onCompleted.addListener(function() {
    //alert("This is my favorite website!");
    setTimeout(function(){  
            chrome.management.launchApp("haiffjcadagjlijoggckpgfnoeiflnem", function(){
            if(chrome.runtime.lastError)
                setTimeout(function(){  
                   chrome.management.launchApp("haiffjcadagjlijoggckpgfnoeiflnem", function(){
                      if(chrome.runtime.lastError) console.error(chrome.runtime.lastError);
                      else console.log("App launched");
                });                      
            }, 5000);   
            else console.log("App launched");
            });                      
    }, 10000);    
  }, {url: [{urlMatches : 'http://mywelcome.northwell.edu/'}]});



       


