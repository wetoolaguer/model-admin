client:
	browserify -r ./lib/ModelAdmin.js -r ./lib/ModelAdminEvents.js -r ./lib/HistoryWriter.js -r ./lib/HistoryInterpreter.js -r ./lib/Historian.js -r ./lib/ServerAdminEvents.js client.js -o model-admin.js
	open test.html
