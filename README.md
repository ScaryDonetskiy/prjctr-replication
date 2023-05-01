Database: Replication
=

Create 3 docker containers: mysql-m, mysql-s1, mysql-s2

Setup master slave replication (Master: mysql-m, Slave: mysql-s1, mysql-s2)

- Run ```./build.sh```

Write script that will frequently write data to database

 - Run ```node write.js```

Ensure, that replication is working

Try to turn off mysql-s1,

 - Result: slave node load all data from the master after turning it on.

Try to remove a column in  database on slave node

 - Result: slave node received updates, but store them without deleted column.
