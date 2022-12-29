
# Blog App

Blog app with CRUD (create, read, update, delete) functionality created with node,
ejs engine and postgresql.
I am using express for handling http methods and middlewares. node-postgres driver
for making query to postgresql database and postgres-migrations for creating relations inside
database.
There are other packages as well like dotenv for accessing environment variables and 
method-override which override's http method with specified in query string for example
in this app for deleting articles our client only supports GET and POST mehtods by specifying
"?_method=DELETE" method-override will override GET or POST mehtods to DELETE method.


## packages used
- express
- pg (node-postgres)
- postgres-migrations
- method-override