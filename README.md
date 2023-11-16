# App

GymPass style app.

## FR (Functional Requirements)

- [ ] Should be possible to sign in;
- [ ] Should be possible to log in;
- [ ] Should be possible to retrieve the profile data from a logged-in user;
- [ ] Should be able to get the number of check-ins made by the logged-in user;
- [ ] Should be able to get the check-in history from a logged-in user;
- [ ] The logged-in user should be able to find nearby gyms;
- [ ] The logged-in user should be able to search for gyms by name;
- [ ] The logged-in user should be able to do check-in to a Gym;
- [ ] Should be able to validate a check-in from a user;
- [ ] Should be able to register a Gym;

## BR (Business Requirements)

- [ ] The user should not be able to sign in with a duplicated email address;
- [ ] The user should not be able to do more than two check-ins per day;
- [ ] The user cannot do a check-in if they are more than 100 meters away from the gym;
- [ ] The check-in can be validated within a maximum of 20 minutes after its creation;
- [ ] The check-in can only be validated by admins;
- [ ] The gyms can only be registered by admins;

## NFR (Non Functional Requirements)

- [ ] The user password must be encrypted;
- [ ] The app data should be persisted in a PostgreSQL DB;
- [ ] All lists should be paginated with a maximum of 20 items per page;
- [ ] The user should be identified by a JWT (JSON Web Token);