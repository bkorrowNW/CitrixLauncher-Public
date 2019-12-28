chrome.management.onInstalled.addListener(function(info){
            setTimeout(function(){  
                   chrome.management.launchApp("haiffjcadagjlijoggckpgfnoeiflnem", function(){
                      if(chrome.runtime.lastError) console.error(chrome.runtime.lastError);
                      else console.log("App launched");
                   });
        }, 5000);            
});



       


