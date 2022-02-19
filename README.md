## Zappyrent Assessment for Frontend Position

This is an appplication that displays a product listing page at Zappyrent

## Table of Contents

 * [Description](#description)
 * [Technologies](#technologies)
 * [Features](#features)
 * [API Endpoints](#api-endpoints)
 * [Getting Started](#getting-started)
    * [Installation](#installation)
    * [Conclusion](#conclusion)

## Description

The user should be able to see a listing page (PLP) of 12 property items (apartaments).

The user should be able to filter the PLP according to the following fields: `available` and `type`. The user should be informed when no apartaments are showed beacuse of filtering options.

The following points will be considered plus:

- The user, clicking on an item of the PLP, should be able to view the details of that specific apartment in a modal window (a sort of detail page, PDP). This action must correspond to a change in the page url which must be unique for each item of the PLP. If the user lands directly on one of the specific URLs of the apartments, one should see the modal window already open, without the need for any click.
- Use of TypeScript (strict mode)
- Writing unit tests for the components created


## Technologies

* [React](https://reactjs.org/) - Web Application Framework
* [Styled Components](https://styled-components.com) - Styling Library
* [TypeScript](https://www.typescriptlang.org) - Programming language

## Features

Feature implemented are soley based on the assignment description

### Completed features
* The user should be able to see a listing page (PLP) of 12 property items (apartaments)
* The user should be able to filter the PLP according to the following fields: `available` and `type`. The user should be informed when no apartaments are showed beacuse of filtering options.
* The user, clicking on an item of the PLP, should be able to view the details of that specific apartment in a modal window (a sort of detail page, PDP). This action must correspond to a change in the page url which must be unique for each item of the PLP. If the user lands directly on one of the specific URLs of the apartments, one should see the modal window already open, without the need for any click

## API Endpoints
* Endpoint: https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties
* Method: GET

### Query string parameters

* `available`: true | false
* `type`: 'Private Room' | 'Shared Room' | 'Entire Property' | 'Studio'


## Getting Started

### Installation

* git clone
  [zappyrent-fe-task](https://github.com/otutukingsley/zappyrent-fe-task.git)
* Run npm install` to install packages
* Run npm run build to build the project
* Run npm start to start the server
* Navigate to [localhost:3000](http://localhost:3000/) in browser to access the
  application

## Conclusion

My development experience for this application was an interesting yet challenging one. I enjoyed the whole building process from scratch and the most challenging problem I faced during the development process was applying the filters via query string parameters. Overall it was a fun and interesting project to work on. 
I have hosted the project on vercel for an easier way to test and inspect the project and below is a live link to the hosted project.

Live link to [zappyrent-frontend-task-by-otutu](https://zappyrent-fe-task-ep4nct8mm-otutukingsley.vercel.app/)
