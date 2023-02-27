FROM nginx:stable
COPY doc-site /usr/share/nginx/html/
WORKDIR /usr/share/nginx/html
