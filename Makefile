install:
	git pull
	npm ci

run:
	clear
	node ./bin/main.js

reboot-dir-users:
	rm -rf ./src/users
	mkdir ./src/users

lint:
	npx eslint .

fix-lint:
	npx eslint --fix .