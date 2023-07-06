var imgver = "b";



function run(interval, frames) {

    var int = 1;

    

    function func() {

		if(window.innerHeight < window.innerWidth){

    		imgver = "c";

		}

		else {

			imgver = "b";

		}

        document.body.id = imgver+int;

        int++;

        if(int === frames) { int = 1; }

    }

    

    var swap = window.setInterval(func, interval);

}



run(4000, 7); //milliseconds, frames

