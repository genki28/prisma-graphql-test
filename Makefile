start:
	npm run start

seed:
	npm run seed

migrate:
	npm run migrate

test:
	npm run test-migrate && npm run test-generate && npm run test-seed && npm run test && npm run test-reset