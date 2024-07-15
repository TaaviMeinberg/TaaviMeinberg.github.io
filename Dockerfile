FROM httpd:2.4

COPY . /usr/local/apache2/htdocs/

RUN mv /usr/local/apache2/htdocs/data-collection /opt/

RUN  apt-get update \
  && apt-get install -y wget \
  && rm -rf /var/lib/apt/lists/*

RUN chmod u+x /opt/data-collection/collectData.sh

#Execute collectData.sh with destination htdocs
CMD /opt/data-collection/collectData.sh /usr/local/apache2/htdocs

#TODO add systemd service/timer stuff for updating data
#TODO refactor collectData.sh to be more location agnostic