install:
	git pull
	npm ci

run:
	clear
	node ./bin/main.js


reboot-dir-users:
	rm -rf ./src/users
	mkdir ./src/users
	touch ./src/users/defaultFile.json

lint:
	npx eslint .

fix-lint:
	npx prettier --write front/index.html
	npx eslint --fix .  