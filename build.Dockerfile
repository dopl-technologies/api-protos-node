FROM namely/protoc-all as builder

RUN apt-get -y install git

WORKDIR /
RUN git clone https://github.com/dopl-technologies/api-protos.git

WORKDIR /api-protos
ARG CACHEBUST=1
RUN echo ${CACHEBUST}
RUN git pull
RUN cp dopl/api/* /defs

WORKDIR /defs
RUN GEN_LANG=node /usr/local/bin/entrypoint.sh --with-typescript -d /defs -o /gen

WORKDIR /output
RUN cp /gen/* .