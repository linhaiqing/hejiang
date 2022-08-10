FROM  linhaiqing/ml:v2.2
COPY . /www/wwwroot/default
RUN chmod -R 777 /www/wwwroot/default
COPY entrypoint.sh /entrypoint_new.sh
RUN chmod -R 777 /entrypoint_new.sh
CMD  /bin/sh -c /entrypoint_new.sh
