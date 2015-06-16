BIN := node_modules/.bin
SRC := $(shell find lib/ -type f -name '*.js')
TEST := ./test/*.js

build: build/index.js

build/index.js: node_modules $(SRC)
	@duo -s Analytics index.js

node_modules:
	@npm i

clean:
	@- rm -rf components build
