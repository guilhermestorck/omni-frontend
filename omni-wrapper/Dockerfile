FROM node:alpine as base

WORKDIR /wrapper

COPY ./package.json /wrapper/package.json

RUN yarn install

FROM base

ARG MAIN_MFE
ARG IMPORT_MAP_URL
ARG PORT

COPY ./webpack.config.js /wrapper/webpack.config.js
COPY ./tsconfig.json /wrapper/tsconfig.json
COPY ./.babelrc /wrapper/.babelrc
COPY ./browser /wrapper/browser
COPY ./server /wrapper/server

WORKDIR /wrapper
RUN yarn build

ENV MAIN_MFE=${MAIN_MFE}
ENV IMPORT_MAP_URL=${IMPORT_MAP_URL}
ENV PORT=${PORT}

ENTRYPOINT [ "yarn", "start:node" ]