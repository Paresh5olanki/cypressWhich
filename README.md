# Which? UI Automation

## Cloning the Repo
Create a folder in your local directory
Navigate to that folder in a terminal
Run `git clone -repo-`
Once the repo has been cloned you can go ahead and install the dependencies by running `npm install`

## Running the tests
We have a couple of predefined script that can be run directly from the terminal

`npm run Headless` This will run the tests in a Chrome browser but in headless mode
`npm run test` This will run the tests in a Chrome browser not in headless mode
`npm run open` This will open the Cypress runner where you can debug and run tests, also useful when writing new tests

These scripts are located in the package.json file, additional scripts can be added or existing ones can be amended.
## Test videos
By default tests video will be stored within the videos folder