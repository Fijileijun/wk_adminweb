#version_1.2
#!/bin/bash
source /etc/profile
confdir="/etc/nginx/conf.d"
ENV="xxx"
app_flag="WukongAdmin_$ENV"
location=""
if [ $ENV == 'aliyun_prod' || $ENV == 'aliyun_stg' ];then
   servername='cdn-webresource.mwee.cn'
elif [ $ENV == 'test' || $ENV == 'dev']; then
   servername='webresource.9now.net'
else
   servername='webresource.wk.localhost'
fi

function help() {
  echo "Usage: $0 start|reload"
}

function conf_check(){
    basepath="/data/application/$app_flag"
    lastdir=`ls -ltd /data/appbak/${app_flag}_* |tac |tail -2 |head -1| awk '{print $NF}' `
        if [ ! -f $name.conf ];then
                 touch $name.conf
        else
                echo "$name.conf exists"
                cp -Rfp $lastdir/web/Public/static/build/* $basepath/web/Public/static/build/
                if [ $? -eq 0 ];then
                    echo "copy old static dir"
                    ls -1 $basepath/web/Public/static/build/
                else 
                    exit 0
                fi
                echo "project updated"
                echo "MW_SUCCESS"
                exit 0
        fi
}

#function port_check(){
#status=`curl -o /dev/null-I  -s -w '%{http_code}' http://localhost:$port`
#    if [[ $status == 200 || $status == 302 ]];then
#        echo "port:$port ok"
#        echo "MW_SUCCESS"
#        exit 0
#    else
#        echo "port:$port check error"
#        exit 1
#    fi
#}

function start(){
#端口自增
 port_list=`netstat -tnulp| awk '{print $4}' | grep -w "8..."| awk -F: '{print $NF}'| sort`
 time=`netstat -tnulp| awk '{print $4}' | grep -w "8..."| awk -F: '{print $NF}' | wc -l`
 time=$[$time+1]
 port=8080
 for i in `seq $time`
 do
     check=`echo $port | grep -w "$port_list"`
     if [ $? -eq 0 ];then
         port=$[$port + 1]
     else
#         echo $port
         break
     fi
 done

    cd $confdir
#端口重复检测
    grep -w "listen  $port" *.conf
    if [ $? -eq 0 ];then
        echo "PORT:$port exists & beyond the limit!"
        exit 1
    fi
    
#配置文件名称判断
    if [[ "$location" == "" ]];then
        name=$app_flag
        conf_check
    else
        name=${app_flag}_${location}
        conf_check
    fi
#添加后端配置文件
echo "server {
        listen  $port;
        server_name   $servername;
        access_log  /var/log/nginx/$name.access.log main;
        error_log  /var/log/nginx/$name.error.log;
        index index.php index.html index.htm;
        root   /data/application/$name/web/Public/static/build;
        index  index.php index.html index.htm;
        location / {
                if (!-e \$request_filename) {
                        rewrite ^(.*)$ /index.php?s=\$1 last;
                        break;
                }
        }


        location ~ \.php$ {
                try_files \$uri /index.php;
                fastcgi_pass   unix:/var/run/php-fpm5.sock;
                fastcgi_index  index.php;
                fastcgi_param  SCRIPT_FILENAME \$document_root\$fastcgi_script_name;
                include        fastcgi_params;
        }

        location ~* ^.+\.(gif|jpg|jpeg|png|bmp|swf)$
        {
                access_log  off;
                expires     1d;
        }

        location ~* ^.+\.(js|css)?$
        {
                access_log  off;
                expires     1h;
        }


        #location ~* .(eot|otf|svg|ttf|woff|woff2)$
        #{
        #        add_header Access-Control-Allow-Origin *;
        #}

}" >> $name.conf
echo "$name.conf created , port $port open!"
/usr/sbin/nginx -t
if [ $? != 0 ];then
        echo "$name.conf test error"
        exit 1;
else
        reload
fi
}

function reload(){
    pid=`pgrep nginx`
    if [[ ! -n "$pid" ]];then
        nginx 
        if [ $? != 0 ];then
            echo "nginx first start error"
        else
            echo "nginx first started"
            ls -1 /data/application/$name/web/Public/static/build/ | tail -1
            echo "MW_SUCCESS"
        fi 
    else
        nginx -s reload
        if [ $? != 0 ];then
            echo "nginx reload error"
        else
            echo "nginx reloaded"
            ls -1 /data/application/$name/web/Public/static/build/ | tail -1
            echo "MW_SUCCESS"
        fi
    fi
}

function stop(){
    nginx -s stop
    echo "nginx stopped"
    echo "MW_SUCCESS"
}

#输入提示
if [ "$1" == "" ]; then
  help
elif [ "$1" == "start" ]; then
  start
elif [ "$1" == "reload" ]; then
  reload
else
  help
fi
