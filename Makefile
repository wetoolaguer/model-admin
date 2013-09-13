client:
	browserify -r ./lib/ModelAdmin.js -r ./lib/ModelAdminEvents.js -r ./lib/ModelObjectEvents.js -r ./lib/HistoryObject.js client.js -o model-admin.js
	open test.html
