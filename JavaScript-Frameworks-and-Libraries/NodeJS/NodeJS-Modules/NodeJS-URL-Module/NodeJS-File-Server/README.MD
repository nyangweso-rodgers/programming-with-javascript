# Node.js File Server

* Now we know how to parse the query string, and in the previous chapter we learned how to make Node.js behave as a file server. Let us combine the two, and serve the file requested by the client.

* Create two html files and save them in the same folder as your node.js files. i.e., __summer-file.html__ and __winter-file.html__

* Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:

* you should see two different results when opening these two addresses: http://localhost:8080/winter-file.html and http://localhost:8080/summer-file.html