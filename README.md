# Trackser
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Added Features](#added-features)
* [Setup](#setup)

## General info
A miniature web app for creating and tracking important tasks through your day. This project is implemented using Bootstrap CSS and Vanilla JS.

## Technologies
Project is created with:
* Bootstrap 4
* CSS
* JavaScript
* HTML
* Jquery-3.6.0
* font-awesome-4.7.0 

## Added Features
Features I've added:
* 04/08/2021 - Added counter for new taks and completed tasks using JavaScript.
* 04/08/2021 - Added progress, progress-bar bootstrap classes for tracking task completion % (percentage).
* 04/08/2021 - Progress Bar is responsive to newly added tasks, deleted tasks and completed tasks.
* 09/08/2021 - Fixed doneCounter issue where deleting any list reduced the doneConter by -1. Fixed reduction of doneCounter using if(this.parentElement.querySelector('p').classList.contains('strike')), doneCounter-=1.

## Setup
* Clone repp and run on any web browser.

## Incoming features
* Timestamp added to tasks.
* CRUD operations.
	
   


