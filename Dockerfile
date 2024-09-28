FROM httpd:2.4

RUN  apt-get update \
  && apt-get install -y wget \
  && rm -rf /var/lib/apt/lists/*

COPY ./frontend/. /usr/local/apache2/htdocs/

COPY ./data-collection /opt/data-collection/

RUN chmod u+x /opt/data-collection/dataCollection.sh

#Execute dataCollection.sh with destination htdocs
RUN /opt/data-collection/dataCollection.sh /usr/local/apache2/htdocs

#TODO refactor dataCollection.sh to be more location agnostic