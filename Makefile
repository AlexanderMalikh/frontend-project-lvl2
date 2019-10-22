# Makefile

install: 
	sudo npm link 

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npx jest . 
.PHONY: test

