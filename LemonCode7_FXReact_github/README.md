# React Lab Excercise

Set of excercises based on an existing code base.

# Get Started

## Backend

Launch the mock backend:

open youtr bash / cmd command line.

cd to _backend_ subfolder

```bash
cd backend
```

Install the dependencies

```bash
npm install
```

Launch the server

```
npm start
```

This will launch a mock server on port 3000.

## Front End

To start with the Front End

open youtr bash / cmd command line.

cd to _frontend_ subfolder

```bash
cd frontend
```

Install the dependencies

```bash
npm install
```

Launch the front server

```
npm start
```

# Excercises

If you are working on a group setup teams of two developers per team.

## 01 Load Data from rest api

- You will need to create an api file under the edit hotel pod.
- You will need to defined an api model.
- You will need to defined a mapper to map from api model to viewmodel.
- You will need to add the api call + mapper in the hotel container.

## 02 Save Data to rest api

- Rather start this once loadData is done (we got the api model ready).
- Create an entry in the api that will wrap an axios patch.
- implement the mapper from the viewmodel to api model (maybe we will need
  another api entity since we are just patching, discussion here).
- Just implement some basic behavior in save.

## 03 Set up form basic validations

- We will just focus on required fields.
- Provide suport at field and form levels.

## 04 Create a custom validator: minimum value

- Validate that a given field value is greater than a value.
- This will be used in the rating validation (stars has to be at least three).
- Implement this using TDD approach.

## 05 Create a custom validator: string does not match exact value

- Validate that a given field value does not match exact value.
- This will be used in the city dropdown (discuss add extra case fix the combo and use lookup entity).
- Implement this using TDD approach.

## 06 Display snackbar on form falidation failed

- This task is dependant on (Set up form basic validations)
- Display a snackbar when the user clicks on save and form validation fails.

## 07 Assembly test HotelFormValidator

- Implement a full form validator test (assembly test).

## 08 Create another view for the hotelCollection pods

- Use material UI Table.
- We could expose options in the index export.

## 09 Create scene that combines both hotel collection + edit

- We could use this for desktop and the other approach for mobile.
- Discuss onEdit click:
  - Option A navigate.
  - Option B pass current hotel to edit to the other component.
- Discuss about refactor.

## 10 Error handling on Ajax calls

If the server is down we don't want just the app to crash.

- Give a try to error boundaries.
- Discuss about async / await.
- Check about suspense and erorr handling.

## 11 Add min lenght to description

- There is an existing validator.

## 12 Enhance hotel list dropdown.

- We should rather use a lookup entity instead of string.