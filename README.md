[![Build Status](https://travis-ci.org/Wynndow/todo_challenge.svg?branch=master)](https://travis-ci.org/Wynndow/todo_challenge)


#To Do list challenge

This is my solution to the Makers Academy Week 8 weekend challenge, which was to make to do list in the form of a mini front-end app. The challenge specified that we could use any level of javascript we wanted, however as week 8 at Makers Academy focuses heavily on Angular, I though this would be the most appropriate technology to implement. 

It's entirely test driven, using Karma/Jasmine and Protractor. My initial step was to sketch the bones of the app out in HTML to get a feel for it, then implement feature tests using Protractor, and then using Karma/Jasmine to test the internals.

It looks like the below screenshot and is hosted on [Heroku](https://todolistwynne.herokuapp.com/) if you'd like to have a play.

![Screenshot](http://i.imgur.com/kCcRsmj.png)

## Setup
0. Clone this repo and change into it with ```$ cd todo_challenge```
0. If you don't already have them, install node and bower with ```$ brew install node``` and then ```$ npm install bower```
0. Install package dependencies by with ```$ npm install``` and ```$ bower install ```

## Usage
0. Launch the app with in your browser with ```$ open index.html```
0. To add a task, simply fill in the box and hit the 'Add' button.
0. To edit a task, just click the task, make the edit and hit 'Save'.
0. To mark a task as done just hit the 'Done?' button next to the completed task.
0. If you want to view just the active, completed or all tasks you can use the filters directly above the list.
0. To permanently remove tasks marked as complete, just use the 'Clear completed' button at the bottom.

## Tests
0. To run the Karma tests for the Angular controller, you will need to have the Karma CLI installed, ```$ npm install -g karma-cli```
0. The tests can now be run with ```$ karma start spec/karma.conf.js```
0. When finished just use ```ctrl + c``` to exit.
0. The Protractor tests require that you have the Java Development Kit installed. You can check if you have it with ```$ java -version```. If you don't, you can get it from [here.](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
0. Protractor will also need to be installed globally with ```$ npm install -g protractor```. This will also install ```webdriver-manager```.
0. ```webdriver-manager``` will need to be updated to make sure it has the correct binaries to get an instance of Selenium Server running (what we'll be using for the tests). Do this with ```webdriver-manager update```
0. Now launch it with ```webdriver-manager start```
0. Now the app will need serving, do so with ```http-server```
0. Finally run the tests with ```$ protractor test/e2e/conf.js```

# User Stories

The user stories I worked from are below.

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice

As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

#Further improvements

There are a couple of features I would like to implement in future.

0. Create some persistant storage with MongoDB.
0. Automate the testing process, possible with Grunt.


#Original README

The original README we received when the challenge was proposed is list below as presented.

# Todo Challenge

* Deadline: submit completed pull request by 9am on Monday
* You may use whatever level of JavaScript you feel comfortable with - pure JS, jQuery, Angular, or whatever weird and wonderful framework you want to try. Extra points for DogeScript

Steps
-------

1. Fill out your learning plan self review for the week: https://github.com/makersacademy/learning_plan 
2. Fork this repo, and clone to your local machine
3. Complete the following challenge:

## Challenge

![Todo mockup](https://makersacademy.mybalsamiq.com/mockups/2914603.png?key=afabb09aef2901a2732515ae4349c1ec0458294b)

Build a Todo list as a mini front-end application. You don't have to use a database, the front-end is more important - you can use an appropriate data structure stored somewhere in your JavaScript (this time only!)

Here are the core user stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

Here are some other user stories you may choose to implement:

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

As you may imagine, implementing a To-do list is very much a solved problem. However, we are mainly interested in seeing how you approach testing and design. We are looking for:

* well written, well structured acceptance and unit tests
* clear and expressive JavaScript
* good HTML5 markup

Don't worry about deployment, and make sure you read the CONTRIBUTING.md when submitting a pull request.

## Extensions

* Deploy the app
* Create a persistance layer (e.g. MongoDB), or use LocalStorage or the filesystem through Node
* Make it look purdy (CSS) - try a framework like Bootstrap or Foundation

## CI

Read the `.travis.yml` if any of the steps below don't make sense! 

* Make sure you have set up `npm test` in your `package.json` so that it runs your Karma tests
* Make sure you have your Protractor config file at `e2e/conf.js`
* Make sure `npm start` spins up whatever serves up your app - `http-server`, Sinatra or Node

Good luck!
