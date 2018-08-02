"use strict";
!function() {
	
	window.addEventListener("load", function() {
		loadInfo("contact");
	});
	
	function loadInfo(name) {
		let section = $(name);
		let load = function(json) { 
			let data = JSON.parse(json);
			for (let i = 0; i < data.length; i++) {
				let datum = data[i];
				
				// loading title
				let title = ce("h3");
				title.textContent = datum.title;
				// loading text (link or paragraph)
				let text = undefined;
				if (datum.link === undefined) {
					text = ce("p");
				} else {
					text = ce("a");
					text.href = datum.link;
					text.target = "_blank"; // to open in new tab
				}
				text.textContent = datum.text;
				
				// putting everything into the HTML
				let div = ce("div");
				div.appendChild(title);
				div.appendChild(text);
				section.appendChild(div);
			}
		}
		ajaxGET("info/" + name + ".json", load);
	}
	
}();