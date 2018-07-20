cd ./ci
docker pull selenoid/chrome
docker pull selenoid/firefox

docker-compose up -d

#docker logs selenoid
#docker logs selenoid-ui

cd ..
npm run test

cd ./ci
docker-compose stop