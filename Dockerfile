FROM nginx

RUN apt-get update && apt-get install -y

COPY cubesite /usr/share/nginx/html
RUN rm -rf /root/.ssh/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]