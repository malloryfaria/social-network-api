# NoSQL: Social Network API

![GitHub license](https://img.shields.io/badge/license-MIT-ff69b4.svg)

## Table of Contents 

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Languages](#languages)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Description
MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. This is an API for a social network built using Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the [Express](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages, it uses the native JavaScript `Date` object to format timestamps.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia Core for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia Core
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
## Demo

The following animations show examples of the application's API routes being tested in Insomnia Core.

The first animation shows GET routes to return all users and all thoughts being tested in Insomnia Core:

![Homework Demo 01](./Assets/18-nosql-homework-demo-01.gif)

The second animation shows GET routes to return a single user and a single thought being tested in Insomnia Core:

![Homework Demo 02](./Assets/18-nosql-homework-demo-02.gif)

The third animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia Core:

![Homework Demo 03](./Assets/18-nosql-homework-demo-03.gif)

Your walkthrough video should also show the POST, PUT, and DELETE routes for thoughts being tested in Insomnia Core.

The final animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia Core:

![Homework Demo 04](./Assets/18-nosql-homework-demo-04.gif)

Your walkthrough video should also show the POST and DELETE routes for reactions to thoughts being tested in Insomnia Core.


## Installation

```
// Clone the repository to your local machine using:|

git clone git@github.com:malloryfaria/social-network-api.git

// Install all the dependencies by typing code:
npm i

// Ensure you have set up MongoDB

// Connect it to your front end by add the Public folder, html routes, CSS, images, etc.

// Then use the below command to start the server:
npm start

```
## Usage
Use this api to set up a social network site.
## Languages/Technology Used
[Express](https://expressjs.com/ "Express")<br />
[Node](https://nodejs.org/en/docs/ "Node")<br />
[MongoDB](https://www.mongodb.com/ "MongoDB")<br />
[Mongoose](https://www.npmjs.com/package/mongoose "Mongoose")<br />
[Javascript](https://www.javascript.com/ "Javascript")<br />

  
## Contributing
If you would like to contribute, please reach out to us. You can find our contact information in the  "Questions?" section below.

## Questions?

If you have any questions about the project, contact us at: https://github.com/orgs/P-I-M/people

## License

This project is licensed under the MIT license.

Copyright (c) 2021 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

