install:
	git pull
	npm ci

run:
	node ./bin/main.js

lint:
	npx eslint .

fix-lint:
	npx eslint --fix .