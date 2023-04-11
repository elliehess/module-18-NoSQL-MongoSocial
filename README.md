# Module 18 NoSQL MongoSocial

## Description

This is an API for a social network by a social media startup that uses a NOSQL database so that the website can handle large amounts of unstructured data. 


## Table of Contents 

- [Visuals](#visuals)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)
- [Sources](#sources)
- [Questions](#questions)

## Visuals

[Click here for Walkthrough Video](https://user-images.githubusercontent.com/118075347/231066665-a291b9df-8b4f-4b4d-9215-554fd32b0cdf.mp4
)

## Installation

You will first need to install some dependencies.
In VS Code, open the Terminal. 
On the command line, type the folling commands:

npm i 

npm start 

You can then use Insomnia to test the API routes. 

## Usage 
When you enter the commands above to invoke this social network API, then your server is started and the Mongoose models are synced to the MongoDB database.
If you open API GET routes in Insomnia for users and thoughts, then the data for each of these routes is displayed in a formatted JSON. You can test API POST, PUT, and DELETE routes in Insomnia to successfully create, update, and delete users and thoughts in the database. You can also test API POST and DELETE routes in Insomnia
to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Tests 

Use Insomnia Core to test API GET, POST, PUT, and DELETE routes. 

## License

Boost Software License 1.0

## Sources

Mongoose Docs
Activity 28 on Module 18 for guidance 
Stack Overflow
- for match email validate on 'models'
- to 'push' created 'thoughtId' to associated 'user''s thoughts field
- for creation of 'virtual' on 'models'

## Badges

[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

## Questions 

Any questions? 
Feel free to check out my work here:
[@elliehess](@elliehess)

Or you can reach out to me at my email address below:
elhess03@gmail.com
