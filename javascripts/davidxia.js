jQuery(function() {
    handlePopup('#custom-tweet-button');
    handlePopup('#custom-facebook-share-button');
    handlePopup('#custom-google-share-button');

    if (jQuery('#custom-tweet-button').length) {
        currentUrl = window.location.href;
        jQuery.ajax({
            dataType: 'jsonp',
            url: 'https://urls.api.twitter.com/1/urls/count.json?url=' + currentUrl,
            success: function(data) {
                if ('count' in data && !isNaN(data.count)) {
                    jQuery('#custom-tweet-button').after('<a id="tweet-count" href="https://twitter.com/search?q=' + encodeURIComponent(currentUrl) + '" target="_blank">' + data.count + '</a>');
                }
            },
        });
    }
});

function handlePopup(id) {
    var customButton = jQuery(id);
    customButton.click(function() {
        var width = 575,
            height = 400,
            top = (jQuery(window).height() - height) / 2,
            left = (jQuery(window).width() - width) / 2,
            url = this.href,
            opts = 'width=' + width +
                   ',height=' + height +
                   ',top=' + top +
                   ',left=' + left;
        window.open(url, 'share-popup', opts);
        return false;
    });
}
