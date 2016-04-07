var urls = ["jack-clubs", "jack-diamonds", "jack-hearts", "jack-spades", "king-clubs", "king-diamonds", "king-hearts", "king-spades", "queen-clubs", "queen-diamonds", "queen-hearts", "queen-spades", "jack-clubs", "jack-diamonds", "jack-hearts", "jack-spades", "king-clubs", "king-diamonds", "king-hearts", "king-spades", "queen-clubs", "queen-diamonds", "queen-hearts", "queen-spades"];
 var positions = new Array(urls.length);
 var pairs = urls.length / 2;

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