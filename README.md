This repo is a simple implementation to access common OCF datasets and to test the OCF-Tools toolkit.

Usage: (before publication of OCF-Tools to NPM)

Download the OCF-Tools repository and run `npm i; npm run build; npm link;` in that directory.

In this project, run `npm link ocf-tools`.

And run "npm start". Change the constants in index.js as needed to support your testing.

# For adding datasets

Add the OCF folder as a unique name in the datasets folder and add one extra JSON file called README.json which should have the structure:
```
{
    name: FOLDER_NAME,
    contributor: YOUR_NAME,
    date: SUBMISSION_DATE,
    description: DESCRIPTION_OF_DATASET
}
```