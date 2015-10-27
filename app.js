(function() {

	var MyName = 
		ng
		.Component({
			selector: 'my-name',
			template: '<span>Ganjar Setia M</span>'
		})
		.Class({
			constructor: function() {}
		});
	
	var HelloApp = 
		ng
		.Component({
			selector: 'hello-app',
			template: '<h1>Hello Angular 2!</h1><my-name></my-name>',
			directives: [MyName]
		})
		.Class({
			constructor: function() {}
		});

	document.addEventListener('DOMContentLoaded', function() {
		ng.bootstrap(HelloApp);
	});
})();