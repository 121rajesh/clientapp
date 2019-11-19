FROM httpd

COPY /dist/Test/ /usr/local/apache2/htdocs/

EXPOSE 80

CMD apachectl -D FOREGROUND