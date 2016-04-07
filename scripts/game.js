function changeImage(id) {
    var identity=id;
        var image = document.getElementById(identity);
        if (image.src.match("hoyleback")) {
            image.src = positions[id - 1];
        }
    }

    function solved(firstId, secondId) {
        var first = document.getElementById(firstId);
        var second = document.getElementById(secondId);
        first.style.border = "10px solid #00b300";
        second.style.border = "10px solid #00b300";
        first.classList.remove("puzzle_images");
        second.classList.remove("puzzle_images");
    }

    function hidecards(firstcard, secondcard) {
        card1 = firstcard;
        card2 = secondcard;
        card1.src = "images/hoyleback.png";
        card2.src = "images/hoyleback.png";
    }



 