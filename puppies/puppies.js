import $ from "jquery";
import "justifiedGallery";

export default function(selector) {
    $(selector).html("Loading...");
	$.ajax({
		url: 'https://api.flickr.com/services/feeds/photos_public.gne',
		dataType: 'jsonp',
		jsonpCallback: "jsonFlickrFeed",
		data: {
			"tags": "puppy",
			"format": "json"
		},
		success: function(response) {
			var html = response.items.map(function(item, index) {
                var media = item.media.m.replace("m.jpg", "z.jpg");
				return '<a href="'+item.link+'">'+
                    '<img alt="'+item.title+'" src="'+item.media.m+'"/>'+
                '</a>'
			}).join("");

			$(selector).html(html).justifiedGallery();
		}
	});
};
