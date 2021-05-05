// https://jqueryui.com/autocomplete/
$(function () {
    // $(document).tooltip();
    var availableGundam = [
        { link: "./gunpla/test_gunpla.html", label: "AppleScript"},
        { link: "https://hopkins.irish", label: "Asp"},
        { link: "https://hopkins.irish", label: "BASIC"},
        { link: "https://hopkins.irish", label: "C"},
        { link: "https://hopkins.irish", label: "C++"},
        { link: "https://hopkins.irish", label: "Clojure"},
        { link: "https://hopkins.irish", label: "COBOL"},
        { link: "https://hopkins.irish", label: "ColdFusion"},
        { link: "https://hopkins.irish", label: "Erlang"},
        { link: "https://hopkins.irish", label: "Fortran"},
        { link: "https://hopkins.irish", label: "Groovy"},
        { link: "https://hopkins.irish", label: "Haskell"},
        { link: "https://hopkins.irish", label: "Java"},
        { link: "https://hopkins.irish", label: "JavaScript"},
        { link: "https://hopkins.irish", label: "Lisp"},
        { link: "https://hopkins.irish", label: "Perl"},
        { link: "https://hopkins.irish", label: "PHP"},
        { link: "https://hopkins.irish", label: "Python"},
        { link: "https://hopkins.irish", label: "Ruby"},
        { link: "https://hopkins.irish", label: "Scala"},
        { link: "https://hopkins.irish", label: "Scheme"}
    ];
    $("#availableGundam").autocomplete({
        source: availableGundam,
        select: function( event, ui ) { 
            window.location.href = ui.item.link;
        }
    }).addClass("ui-screen-hidden");
});