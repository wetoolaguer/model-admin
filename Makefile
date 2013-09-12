client:
	browserify -r ./lib/ModelAdmin.js -r ./lib/ModelAdminEvents.js -r ./lib/ModelObjectEvents.js client.js -o model-admin.js
	open test.html
