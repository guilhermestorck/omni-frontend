FROM halverneus/static-file-server

ARG PORT=8080
WORKDIR /dist
COPY ./dist /dist

ENV CORS=true
ENV FOLDER=/dist
ENV PORT=${PORT} 

ENTRYPOINT ["/serve"]