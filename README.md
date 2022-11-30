# ChallengeRb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Running the app

Set of commands for the app:
- Run `npm i` to install necessary packages before starting the dev server.
- Run `npm run start` for a dev server. Navigate to `http://localhost:4200/` to see the webapp;
- Run `npm run cypress` **with dev server open** to run headless e2e tests I've written for some features;
- If you wish to interact with cypress GUI, run `npx cypress open`.

## Features

Managed to finish all the goals and bonuses, although haven't done anything beyond that. (no "bonus" bonuses :D)

Features:
- Shows list of the customers fetched from the API;
- Clicking on a customer shows a dialog with details about the chosen customer;
- Clicking on a customer marks a cake next to other customer's name when the birthday month is the same;
- Search in the top left corner of the table works for first name or last name;
- Can delete a record with trashcan button;
- Can filter the list based on hasContract property using the tristate checkbox; 
- Refresh data by a click of the button;
- Can change pagination to one of three provided values, 10 included.

## Feedback
### Thoughts on further improvement 

- avatar fallback and other placeholders in case API fails
- handling of API request failure
- order imports better
- ~~handling of fetching the customer could be done in another service / interceptor~~ done!
- console warnings or comments for devs, about things like pipe necessary args
- toasts / dialogs for better prompts for UX
- loading indicators on filtering / data fetching
- general look and feel, layout - current state of the page is pretty much task-focused and uses basic styling.

Priority: I'd work on prompts, dialogs and placeholders given the UX is quite lackluster and user might not know if some action was unsuccessful.

### Time prioritization

Mainly things that I knew how to do I've done first. I like getting things done, motivates me further to work on harder tasks.

### Assumptions

- That it should just work and not look good for the time being.
- Deletion should work only for, no need for option to delete all the users.

### Questions to ask

- Should cake be visible for the selected user? (Probably not using common sense but asking wont hurt)
- How many records should we handle? Higher amount of records would imply higher priority on handling, maybe we'd need to use lazy loading etc.



