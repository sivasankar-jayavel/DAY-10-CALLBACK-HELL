
var div = document.createElement("div"); 
div.setAttribute("id","screen");

var ele = document.createElement("h1");
ele.setAttribute("id", "count");
ele.innerHTML = "10";

div.append(ele);
document.body.append(div);

var count1 = document.getElementById("count").innerText;
setTimeout(() => {
    count1 = count1 - 1;
    ele.innerHTML = count1;
    setTimeout(() => {
        count1 = count1 - 1;
        ele.innerHTML = count1;
        setTimeout(() => {
            count1 = count1 - 1;
            ele.innerHTML = count1;
            setTimeout(() => {
                count1 = count1 - 1;
                ele.innerHTML = count1;
                setTimeout(() => {
                    count1 = count1 - 1;
                    ele.innerHTML = count1;
                    setTimeout(() => {
                        count1 = count1 - 1;
                        ele.innerHTML = count1;
                        setTimeout(() => {
                            count1 = count1 - 1;
                            ele.innerHTML = count1;
                            setTimeout(() => {
                                count1 = count1 - 1;
                                ele.innerHTML = count1;
                                setTimeout(() => {
                                    count1 = count1 - 1;
                                    ele.innerHTML = count1;
                                    setTimeout(() => {
                                        ele.innerHTML = '<p id="display">HAPPY INDEPENDENCE DAY</p>';                                                                             
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
