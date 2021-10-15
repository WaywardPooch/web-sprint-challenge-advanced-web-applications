# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.
​

1.  Explain what a token is used for.
    ​
    A token is a unique identifier generated by a server and copied to a client. When a client wants to perform a protected action, the token of the client is compared against the server's to authenticate the user.

2.  What steps can you take in your web apps to keep your data secure?

    To keep sensitive content secure, we should protect routes that contain private information, and create/use a system to verify user authenticity before allowing users access to content.

3.  Describe how web servers work.

    Servers take requests and perform actions based on the requests they recieve. Most client requests fall into the categories of getting, sending, removing, or updating information on servers.

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    CRUD maps perfectly to the following API calls:

    - Create => `POST()`
    - Read => `GET()`
    - Update => `PUT()`
    - Delete => `DELETE()`