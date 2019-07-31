## Git Issues API Demo

# About

This is Demo of Git Issues API

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3

Key systems are Angular 8, Material.io, bootstrap 4

# Features

 - Responsive layout - fits any standard screen size
 - Reponsive table - table converts to verital layout when in smaller view
 - Search issue title and body by wildcard
 - Local paginated table

# Prerequisites

- Install [Node.js](https://nodejs.org/en/download/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [GitHub cli](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Install angular cli Globabally:
 ```
 npm install -g @angular/cli
 ```


# Getting started
- Clone the repository
```
git clone https://github.com/shawndotey/git-issues-demo.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Start Server on `http://localhost:4200/`. The app will automatically reload if you change any of the source files
```
ng serve
```
# Additional Project Notes
 - Ideally, we would want to paginate and search from the server side, but due to limitations on the GitHub [issues api](https://developer.github.com/v3/issues/), we must do so locally. There is a GitHub "search api" but that was outside the scope of this project
  
# Further info

Email [me](shawncdotey@gmail.com)

