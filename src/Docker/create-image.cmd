docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kanec/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t kanec/app ../..
