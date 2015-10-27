(function() {
	
	var HelloApp = 
		ng
		.Component({
			selector: 'hello-app',
			template: '<h1>Hello Angular 2!</h1>',
		})
		.Class({
			constructor: function() {}
		});

	document.addEventListener('DOMContentLoaded', function() {
		ng.bootstrap(HelloApp);
	});
})();