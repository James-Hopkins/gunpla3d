// https://jqueryui.com/autocomplete/
$(function () {
    // $(document).tooltip();
    var availableGundam = [
        { 
            link: "./gunpla/test_gunpla.html", 
            label: "RX-78-2 Gundam (Beyond Global), Bandai Spirits HG 1/144"
        }
    ];
    $("#availableGundam").autocomplete({
        source: availableGundam,
        select: function( event, ui ) { 
            window.location.href = ui.item.link;
        }
    }).addClass("ui-screen-hidden");
});