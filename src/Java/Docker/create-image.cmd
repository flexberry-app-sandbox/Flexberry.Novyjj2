docker build --no-cache -f SQL\Dockerfile.PostgreSql -t novyjj_2-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t novyjj_2-java/app ../../..
