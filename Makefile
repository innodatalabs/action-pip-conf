all:
	npx ncc build index.js -o lib && npx ncc build cleanup.js -o lib/cleanup
