function TopScript() {
    $.ajax({
        url: "nav.txt",
        type: "GET",
        success: function (msg) {

            $("#qqq").html(msg);
        }
    });
}
$(document).ready(function () {
    TopScript();
});