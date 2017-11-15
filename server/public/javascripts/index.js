var imgUrl = "";

$( document ).ready(function() {

    $('#getImgBtn').on('click', function() {
        console.log('#getImgBtn');

        imgUrl = $('#imgUrlIp').val();
        $("#img").attr("src", imgUrl);
    });

    $('#anaImgBtn').on('click', function() {
        console.log('#anaImgBtn');
        // Do your AJAX call to ML API here
    });

});
