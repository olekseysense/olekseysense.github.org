if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 600);

}

var x = 0;

var titleText = [ "0", "0l", "0l3", "0l3k", "0l3ks", "0l3ks3", "0l3ks3y", "0l3ks3ys", "0l3ks3ys3", "0l3ks3ys3n", "0l3ks3ys3ns", "0l3ks3ys3ns3", "0l3ks3ys3ns3.", "0l3ks3ys3ns3.p", "0l3ks3ys3ns3.pw","0l3ks3ys3ns3.p", "0l3ks3ys3ns3.", "0l3ks3ys3ns3", "0l3ks3ys3ns", "0l3ks3ys3n", "0l3ks3ys3", "0l3ks3ys", "0l3ks3y", "0l3ks3", "0l3ks", "0l3k", "0l3", "0l", "0" ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
