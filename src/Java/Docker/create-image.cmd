docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kanec-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kanec-java/app ../../..
