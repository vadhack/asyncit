


###Javascript package for async loop

####Use

```
var iterate = require("asyncit");

//array = [ {...}, ...];

iterate(array)
    .it(function(data, next, stop, i, ult){

    	//EXAMPLE
        table.createRow([
            data.type,
            data.num,
            data.cant,
            data.und,
            time.getDateTime(data.date)
        ]);
        loaded.innerHTML = i;
        
        next();
        if(ult) stop();
    })
    .stop(function(){
        //do something at end
        table.display();
    });
```