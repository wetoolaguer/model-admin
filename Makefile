client:
	browserify -r ./lib/ModelAdmin.js client.js -o model-admin.js
	open test.html
