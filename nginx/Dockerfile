# Base on offical NGINX Alpine image
FROM nginx:alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*


# Install logrotate
RUN apk add --update logrotate

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./nginx/nginx.conf /etc/nginx/conf.d/
COPY ./nginx/logrotate.conf /etc/logrotate.d/nginx

RUN chmod 644 /etc/logrotate.d/nginx
RUN dos2unix /etc/logrotate.d/nginx


# Expose the listening port
EXPOSE 80


RUN crond

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]

## TEST
# logrotate --force /etc/logrotate.d/nginx