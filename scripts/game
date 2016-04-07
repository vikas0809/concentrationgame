 var urls = ["jack-clubs", "jack-diamonds", "jack-hearts", "jack-spades", "king-clubs", "king-diamonds", "king-hearts", "king-spades", "queen-clubs", "queen-diamonds", "queen-hearts", "queen-spades", "jack-clubs", "jack-diamonds", "jack-hearts", "jack-spades", "king-clubs", "king-diamonds", "king-hearts", "king-spades", "queen-clubs", "queen-diamonds", "queen-hearts", "queen-spades"];
 var positions = new Array(urls.length);
 var pairs = urls.length / 2;

function changeImage() {
        var image = document.getElementById(id);
        console.log(id);
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


 function initiate() 
{
     var nums = new Array();
     for (var i = 0; i < 24; i++) {
         var add = true;
         var n = Math.floor(Math.random() * (23 - 0 + 1)) + 0;;
         for (var j = 0; j < nums.length; j++) {
             if (nums[j] == n) {
                 add = false;
             }
         }
         if (add) {
             nums.push(n);
         } else {
             i--;
         }
     }
     for (var i = 0; i < 24; i++) {
         positions[i] = "images/" + urls[nums[i]] + ".png";
         console.log(positions[i]);
     }
 }

 function reload() {
     location.reload();
 }