// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const databaseName = 'task-manager';

MongoClient.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect o database!');
    }
    console.log("Connected correctly!")
    const db = client.db(databaseName);

    db.collection('tasks').deleteOne(
        { description: 'homework'}
    ).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})