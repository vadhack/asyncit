


###Javascript package for async loop

####Use

```js
var iterate = require("asyncit");

//array = [ {...}, ...];

iterate(array)
    .it(function(data, next, stop, i, last){

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
        if(last) stop();
    })
    .stop(function(){
        //do something at end
        table.display();
    });
```