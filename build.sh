#version_1.0
#!/bin/bash
source /etc/profile

if [ ! $1 ];then
    echo "Usage: $0 enviroment"
    exit 1
fi

ENV=$1
echo "$ENV"
PROJECT_NAME="WukongAdmin_$ENV"
BUILD_NAME="node_modules"

function check() {
  if [ $1 != 0 ];then
    echo "exec fail"
    exit 1
  fi
}

echo "execute npm install"
npm --registry=http://127.0.0.1:8081/nexus/content/groups/npm-group/ install

if [ -d ./$BUILD_NAME ];then
    sed -i "s/xxx/$ENV/g" service*.sh
    mkdir $PROJECT_NAME
    mv * $PROJECT_NAME
    tar -czvf  "$PROJECT_NAME".tar.gz  $PROJECT_NAME/
    check $?
    echo "MW_SUCCESS"
fi