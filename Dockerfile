FROM  linhaiqing/ml:v2.2
RUN mkdir /www/wwwroot/default/public
COPY . /www/wwwroot/default/public
RUN chmod -R 777 /www/wwwroot/default/public
COPY entrypoint.sh /entrypoint_new.sh
RUN chmod -R 777 /entrypoint_new.sh
CMD  /bin/sh -c /entrypoint_new.sh
