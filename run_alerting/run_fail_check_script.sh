if resultfilenames=$(grep -il "fail" /home/nightwatch/node_modules/nightwatch/run_reports/Tekka/*.xml); then
   echo "Errors/Changes were found !!"
   echo $resultfilenames
   php php_email_alert_script.php $resultfilenames
else
   echo "No Errors Found"
fi
