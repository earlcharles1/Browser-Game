    let button = document.querySelector("#button")
    let clicks = document.querySelector("#clicks")
    var counter = 0
    button.addEventListener("click", e => {
        counter++;
        clicks.innerHTML = "Clicks: " + counter
    })

    let item = document.querySelector("#thing")
    let crown = '\u{1F451}';
    let cake = '\u{1F382}';
    let cookie = '\u{1F36A}';
    let sushi = '\u{1F363}';
    let pizza = '\u{1F355}';
    let burger = '\u{1F354}';
    let ice = '\u{1F366}';

    var state = 'false';
    var on = "false";
    var ctime = 10;

    function time1() {
        ctime = ctime-1
        if (ctime <= 0){
        window.location.reload(true);
        }
        //if (counter)
        if (counter >= 25){
            console.log("off!")
            on = 'off';
        }
        
    }

    function functionOnCount() {
        if (counter >= 1000) {
            item.innerHTML = crown;
        }
        else if (counter >= 85) {

            item.innerHTML = ice;
        }
        else if (counter >= 70) {

            item.innerHTML = burger;

        }
        else if (counter >= 55) {
            item.innerHTML = sushi;
        }
        else if (counter >= 40) {
            item.innerHTML = pizza;
        }
        else if (counter >= 25) {
            item.innerHTML = cake;

        }
        else if (counter >= 10) {
            item.innerHTML = cookie;
            
            if (on=="true"){
            if (state == 'false') {
                var time = setInterval(time1, 1500);
                state = 'true';
            }
            }
        }





    }
    setInterval(functionOnCount, 1);
    