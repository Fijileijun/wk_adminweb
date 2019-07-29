## NgRouter 网关管理系统

### 启动

#### wukong admin web 
1. cd wukong_adminweb 目录
2. npm install 
3. npm start 或者 pm2 start ecosystem.json --only wkadminweb_local

### wukong admin web static resource
#### 方法1
1. cd wukong_adminweb/web/Public/static 目录
2. npm install
3. npm start &

#### 方法2
1. cd wukong_adminweb/web/Public/static 目录
2. npm run build
3. 将web/Public/static下build配置到nginx（如下例子放到/opt/wk_adminwebresource/），采用nginx运行,nginx server配置如下：

````
    server {
            listen  8080;
            #server_name   localhost;
            access_log  /var/log/wk_adminweb/access.log main;
            error_log  /var/log/wk_adminweb/error.log;
            root   /opt/wk_adminwebresource/;
            index  index.html;
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
    }


````
  
