# Next Docker

This project explores how to dockerize a next 14 app.

## NGinx

Go to directory `/etc/nginx/sites-enabled` and create a file named
<your-domain.com>

for example `/etc/nginx/sites-enabled/next-docker.donis3.com`

```nginx
# Define upstream server (your Docker container)

# Main server block
server {
    listen 80;

    # App Url
    server_name next-docker.donis3.com;

    # Location block for handling requests
    location / {
        proxy_pass http://localhost:3000; # Proxy requests to upstream server
        proxy_http_version 1.1;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

After this initial setup , run `nginx -t` to verify config is correct.

We may now continue with certbot installation

## SSL Certificates

Following commands will install certbot and configure ssl for all sites at `/etc/nginx/sites-enabled/`

`sudo snap install --classic certbot`

`sudo ln -s /snap/bin/certbot /usr/bin/certbot`

`sudo certbot --nginx`

`sudo certbot renew --dry-run`
