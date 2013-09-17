client:
	browserify -r ./lib/ModelAdmin.js -r ./lib/ModelAdminEvents.js -r ./lib/HistoryWriter.js -r ./lib/HistoryInterpreter.js -r ./lib/Historian.js -r ./lib/ServerAdminEvents.js client.js -o model-admin.js
	open test.html

REPORTER = dot

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter list --timeout 1000

test-w:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--growl \
		--watch

.PHONY: test test-w
