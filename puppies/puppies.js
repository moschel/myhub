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
				return '<a href="'+item.link+'">'+
                    '<img alt="'+item.title+'" src="'+item.media.m+'"/>'+
                '</a>'
			}).join("");

			$(selector).html(html).justifiedGallery();
		}
	});
};


// Requirement #4: render puppies data

// GET https://api.flickr.com/services/feeds/photos_public.gne
// params:
// - tags=x
// - format=y

// <a href="https://www.flickr.com/photos/karpinsky/27731037120/">
// <img alt="Snoozer" 
// src="https://farm8.staticflickr.com/7389/27731037120_8b9d4e5ed9_m.jpg">
// </a>

// $(content).justifiedGallery();

// Bonus: Loading... text