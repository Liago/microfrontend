FROM nginx:alpine
COPY ./dist /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
