#version_2.0
#!/bin/bash
source /etc/profile

if [ ! $1 ];then
    echo "Usage: $0 enviroment"
    exit 1
fi

ENV=$1
echo "$ENV"
PROJECT_NAME="WukongAdmin_$ENV"
NODE_MOUDULES_NAME="WukongAdmin_node_modules"

PACKAGE_DIR='/web/Public/static/'
NODE_MOUDULES_DIR=/opt/auto/webresource/node_modules
DIR=`pwd`

function check() {
  if [ $1 != 0 ];then
    echo "$2 fail##########################"
    exit 1
  else
    echo "$2 success#######################"
  fi
}

function error() {
  if [ $1 != 0 ];then
    echo "$2 success##########################"
    rm -rf $2.tmp
  else
    echo "$2 error############################"
    rm -rf $2.tmp
    exit 1
  fi
}

function output() {
  echo "#########################"
  egrep "ERROR|Error" $1.tmp
  error $? $1
}

echo "execute npm install"
npm --registry=http://127.0.0.1:8081/nexus/content/groups/npm-group/ install

sed -i "s/xxx/$ENV/g" service*.sh
#create staic file
cd web/Public/static
cp $NODE_MOUDULES_DIR/${NODE_MOUDULES_NAME}.tar.gz ./
tar -zxf ${NODE_MOUDULES_NAME}.tar.gz
check $? "tar node_module"

npm --registry=http://127.0.0.1:8081/nexus/content/groups/npm-group/ install 2>&1 | tee npm.tmp
output "npm"

cd $PACKAGE_DIR
webpack --env=$ENV --path='../../../'/ 2>&1 | tee webpack.tmp
output "webpack"

rm -rf $DIR/web/Public/static/node_modules $DIR/web/Public/static/${NODE_MOUDULES_NAME}.tar.gz
echo "node_modules delete##########################"

#tar sourcecode
cd $DIR
mkdir $PROJECT_NAME
mv * .[^.]* $PROJECT_NAME
tar -czf  "$PROJECT_NAME".tar.gz  $PROJECT_NAME/
check $? "tar project"
echo "MW_SUCCESS"