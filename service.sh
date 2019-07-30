#version_1.0
#!/bin/bash
source /etc/profile

# app_name要与你项目名称一致
APP_NAME="ngrAdmin"
ENV="xxx"
SERVICE="${APP_NAME}_${ENV}"

function appStart() {
  echo "${SERVICE}, is starting at $(date '+%Y-%m-%d %H:%M:%S'), please wait"
  pm2 start ecosystem.json --only ${SERVICE}
  if [ $? != 0 ];then
     echo "pm2 start FAILED at $(date '+%Y-%m-%d %H:%M:%S')"
     return 1
  fi
  sleep 2
  count=`pgrep -f "$APP_NAME" | wc -l`
  if [ $count -eq 0 ]; then
    echo "$SERVICE start FAILED ,because can not find the process at $(date '+%Y-%m-%d %H:%M:%S')"
    return 1
  else
    echo "$SERVICE start SUCCESS at $(date '+%Y-%m-%d %H:%M:%S')"
    return 0
  fi
}
 
function appStop() {
  echo "${SERVICE}, is stopping at $(date '+%Y-%m-%d %H:%M:%S'), please wait"
  pid=`pgrep -f ${APP_NAME}`
  echo "current service's pid are[ $pid ], it is stopping..."
  pm2 stop ${SERVICE}
  pm2 delete ${SERVICE}
  sleep 1
  count=`ps -p ${pid} | grep -v "PID TTY" | wc -l`
  if [ $count -eq 0 ]; then
    echo "pm2 stop ok at $(date '+%Y-%m-%d %H:%M:%S')"
    return 2
  else
    echo "pm2 stop failed at $(date '+%Y-%m-%d %H:%M:%S')"
    return 1
  fi
}
 
function check_pid() {
  count=`pgrep -f ${APP_NAME} | wc -l`
  echo "$APP_NAME has $count processes running..."
  if [[ $count != 0 ]]; then
    running=1
    return $running
  fi
  return 0
}
 
function start() {
  appStart
}

function stop() {
  appStop

  if [ $? != 2 ]; then
    check_pid
    if [ $? -gt 0 ]; then
      pid=`pgrep -f ${APP_NAME}`
      echo "exec kill -9 $pid"
      kill -9 ${pid}
      if [ $? -ne 0 ]; then
       echo "kill -9 $pid fail"
       echo "$SERVICE stopped FAILED!!! at $(date '+%Y-%m-%d %H:%M:%S')"
       return
      fi
    fi
  fi
  echo "$SERVICE stopped SUCCESS... at $(date '+%Y-%m-%d %H:%M:%S')"
}
 
function restart() {
  echo "call restart()..."
  stop 1
  sleep 1
  start
}
 
function status() {
  check_pid
  running=$?
  if [ $running -gt 0 ]; then
    pm2 status
    echo ${APP_NAME} has started
  else
    echo ${APP_NAME} has stoped
  fi
}
 
function help() {
  echo "start|stop|restart|status"
}
 
function check() {
  if [ $1 != 0 ]; then
    echo "exec fail"
    echo "$2"
    exit 1
  fi
}
 
if [ "$1" == "" ]; then
  help
elif [ "$1" == "stop" ]; then
  stop
elif [ "$1" == "start" ]; then
  start
elif [ "$1" == "restart" ]; then
  restart
elif [ "$1" == "status" ]; then
  status
else
  help
fi