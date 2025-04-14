$(document).ready(function() {
    const showFlyoutBtn = $("#showFlyoutBtn");
    const flyoutDiv = $(".flyout");
    const flyoutInput = $(".flyout input");
    let isFlyoutVisible = false;

    showFlyoutBtn.on("click", function() {
        flyoutDiv.slideToggle(function() {
            isFlyoutVisible = flyoutDiv.is(":visible");
            if (isFlyoutVisible) {
                // Add scroll event listener when flyout is opened
                flyoutDiv.on("scroll", function() {
                    console.log("Flyout scrolled");
                    flyoutInput.blur(); // Unfocus the input field
                });
            } else {
                // Remove scroll event listener when flyout is closed
                flyoutDiv.off("scroll");
            }
        });
    });
});