# Youtube_Memories_MERN
Steps :-

1 ]
Creating 2 folders client and server

2 ]
Open terminal and go to the 'client' folder
Initializing react environment by command 
'npx create-react-app ./'

3 ]
create start point file named as 'index.js'
(in terminal) go to 'Server' and command 'npm init -y' 

4 ] 
Adding react server dependancies
npm install body-parser cors express mongoose nodemon
body-parser   > to send post request
cors          > enable cross origin request
express       > to create routing in app
mongoose      > to create models for posts
nodemon       > to automatically run the server everytime as changes code

5 ]
"type": "module" in package.json is use to create modern syntax 
like 
import express from 'express' 
instead of
const express= require('express')

6 ]
added start scripts


7 ]
Adding client dependancies
npm install axios moment react-file-base64 redux redux-thunk
axios   ->for api request
moment  -> library for time and date
react-file-base64  -> to convert images
redux-thunk         -> for asynchronous actions in redux


8 ] 
Deleting all 'src' folder from client and created new 
'index.js' ,'App.js' file