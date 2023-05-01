const mysqlx = require("@mysql/xdevapi");

const config = {
    host: '127.0.0.1', port: 33060, user: 'root', password: 'default', schema: 'prjctr'
};

mysqlx
    .getClient(`mysqlx://${config.user}:${config.password}@${config.host}:${config.port}`, {})
    .getSession(config)
    .then(session => {
        session
            .sql('CREATE TABLE `prjctr`.`replication` (`id` int AUTO_INCREMENT,`event` varchar(255), PRIMARY KEY (id));')
            .execute()
            .then(() => {
                let table = session.getSchema(config.schema).getTable('replication');

                setInterval(() => {
                    let event = 'Row insert #' + Math.random();
                    table.insert('event')
                        .values(event)
                        .execute()
                        .then(() => {
                            console.log(event);
                        });
                }, 5000);
            });
    });