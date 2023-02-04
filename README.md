# REST-API

This is a Web API (or Web Service) conforming to the REST architectural style.
It handles five kind of operatins
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE

Users can articles with a title and content to test this API.

### Getting Started

* Clone this repository [here](https://github.com/BhaktiJ338/REST-API.git).
* The main branch is the most stable branch at any given time, ensure you're working from it.
* Run npm install to install all dependencies
* You can either work with the default mLab database or use your locally installed MongoDB. Do configure to your choice in the application entry file.
* Create an .env file in your project root folder and add your variables. See .env.sample for assistance.

### Usage

* Run npm start:dev to start the application.
* Connect to the API using Postman on localhost:3000/articles.

### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /articles | To retrieve all articles on the platform |
| GET | /articles/:articleName | To retrieve a specific article |
| POST | /article | To create new article |
| PUT | /articles/:articleName | To find an article and replace it with new article |
| PATCH | /articles/:articleName | To update specific field in a article |
| DELETE | /articles | To delete all articles |
| DELETE | /articles/:articleName | To delete specific article |


### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
