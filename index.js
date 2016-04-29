/*
(The MIT License)

Copyright (c) 2011-2016 Valentín Arámbulo Díaz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files
(the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify,
 merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

www.vadhack.com
*/

module.exports = function(array){
    var i       = 0, 
        l       = array.length,
        timer   = 0,
        ult     = l - 1, 
        act     = -1,
        next    = function(){i++;},
        iter    = function(){},
        onstop  = function(){},
        stop    = function(){
            clearInterval(timer);
            onstop && onstop();
        },
        result  = {};
    result.it = function(onit){
        iter = onit;
        return result;
    };
    result.stop = function(onst){
        onstop = onst;
        return result;
    };
    result.terminate = function(){
        clearInterval(timer);
    };
    timer = setInterval(function(){
        if(act == i) return;
        act = i;
        iter(array[i],next, stop, i, i >= ult);
    });
    return result;
}