FROM halverneus/static-file-server

ARG PORT=8080
WORKDIR /public
COPY ./public /public

ENV CORS=true
ENV FOLDER=/public
ENV PORT=${PORT} 

ENTRYPOINT ["/serve"]