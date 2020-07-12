
FROM alpine:3

# Open up port 1313
EXPOSE 1313

RUN apk add hugo

WORKDIR /opt/site

CMD hugo server -D --bind 0.0.0.0
