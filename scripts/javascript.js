$(document).ready(function() {
    var id;
    var id1;
    var flipped = 0;
    var counter = 0;
    
    function checkvalues(firstId, secondId) {
        var id1 = firstId;
        var id2 = secondId;
        if (id1 != null && id2 != null && id1 != id2) {
            var first = document.getElementById(id1);
            var second = document.getElementById(id2);
            if (first.src != second.src) {
                hidecards(first, second);
            } else {
                pairs--;
                solved(id1, id2);
            }
        }
    }
    $(".puzzle_images").click(function() {
        id = this.id;
        changeImage(id);
        counter++;
        document.getElementById("clicks").innerHTML = counter;
        document.getElementById("pairs").innerHTML = pairs;
        var image = document.getElementById(id);
        if (id1 != null && id != null && id1 != id) {
            checkvalues(id1, id);
        } else if (id1 == id) {
            hidecards(id1,id);
        }
        if (image.className == "puzzle_images") {
            id1 = id;
            flipped++;
            if (flipped > 1) {
                id = null;
                id1 = null;
                flipped = 0;
            }
        }
    });
}); // end ready