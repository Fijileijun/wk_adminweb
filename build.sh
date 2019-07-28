#version_1.0
#!/bin/bash
source /etc/profile

if [ ! $1 ];then
    echo "Usage: $0 enviroment"
    exit 1
fi

ENV=$1
PROJECT_NAME="ngrAdmin_$ENV"
echo "$PROJECT_NAME"
BUILD_NAME="node_modules"

function check() {
  if [ $1 != 0 ];then
    echo "exec fail"
    exit 1
  fi
}

echo "execute npm install"
npm --registry=http://127.0.0.1:8081/repository/npm-public/ install

if [ -d ./${BUILD_NAME} ];then
    sed -i "s/xxx/$ENV/g" service*.sh
    mkdir ${PROJECT_NAME}
    mv * ${PROJECT_NAME}
    tar -czvf  "$PROJECT_NAME".tar.gz  $PROJECT_NAME/
    check $?
    echo "build SUCCESS"
fi