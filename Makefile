include $(wildcard .env)
export

build:
	docker build -t exercise-app-image .

create-db:
	docker run -d --name exercise-db -v exercise_db:/var/lib/postgresql/data -p ${DB_PORT}:5432 -e POSTGRES_USER=${DB_USERNAME} -e POSTGRES_DB=${DB_NAME} -e POSTGRES_PASSWORD=${DB_PASS} postgres:${DB_VERSION}

start-db:
	docker start exercise-db

stop-db:
	docker stop exercise-db

remove-db-container:
	docker rm exercise-db

remove-db-volume:
	docker volume rm exercise-db

remove-db:
	make stop-db; make remove-db-container; make remove-db-volume
