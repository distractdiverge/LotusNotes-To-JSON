var Browser = require("zombie");
var assert = require("assert");

browser = new Browser();
browser.visit("https://webmail.publicisgroupe.net", function() {

	browser.
		fill("username", "alapinsk").
		fill("password", "Model2.kill2").
		pressButton(".ligneBouton .ligneBoutonDroite input", function(){

			assert.ok(browser.success);
			console.log("New Page Name: " + browser.window.title);

		});

});
