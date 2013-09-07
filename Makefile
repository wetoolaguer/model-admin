test:
	browserify -r ./model-admin/ModelObject entry.js -o model-admin.js
	open index.html
