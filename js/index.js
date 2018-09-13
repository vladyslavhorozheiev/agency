//imageLibrary
function showItem(evt, links) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(links).style.display = "block";
    evt.currentTarget.className += " active";
}

//swap image
$(document).ready(function () {
    var imgCount = 5; //number of images to flip
    var counter = 2;

    $('.swapImage').click(function () {
        if (counter <= imgCount) {
            $('#imgBlock').attr('src', 'image/block' + counter + '.jpg');
            counter++;
        } else {
            counter = 1;
            $('#imgBlock').attr('src', 'image/block' + counter + '.jpg');
        }
        return false;
    });
});
