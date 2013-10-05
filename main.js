var Browser = require("zombie");
var assert = require("assert");

browser = new Browser();
browser.visit("https://webmail.publicisgroupe.net", function() {

// TODO: Prompt at terminal for user's input of username and password

	browser.
		fill("username", "").
		fill("password", "").
		pressButton(".ligneBouton .ligneBoutonDroite input", function(){

			assert.ok(browser.success);
			console.log("New Page Name: " + browser.window.title);

		});

});
