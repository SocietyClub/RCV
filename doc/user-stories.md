User Stories and Constraints for MVP Milestone

# Roles

Poll Creator
Voter
Viewer

# User Stores

`As a ___ I would like to ___ because ___.`

## Poll Creator

As a Poll Creator, I would like to be able to create a poll with a title and a set of candidates by name, because I would like a way to make a decision.

As a Poll Creator, I would like to be able to update a poll title and/or candidates, because I would like to fix any mistakes I may have made.

As a Poll Creator, I would like the votes to be discarded when I update a poll to force users to vote again with my new changes.

As a Poll Creator, I would like to retain the poll link when I update a poll, because I want to avoid sending a new poll link.

As a Poll Creator, I would like to finalize a poll by disallowing more votes, because I want to prevent changes to the poll after a choice has been made.

As a Poll Creator, I would like to regulate the allowed number of candidates a voter can rank on any given vote, because I want to be able to reduce the complexity to make a vote.

As a Poll Creator, I would like to have a button I can click that will give me a separate link to share to the voters, because I want to be able to share my poll with others. 

As a Poll Creator, I would like the poll to only be editable by me, because I want to prevent others from tampering with my poll settings.


TODO:
- Feature Idea: Poll Creator choose if votes can be edited
- Feature Idea: Poll Creator see how many people have clicked the link vs votes have been cast

## Voter

As a Voter, I would like to be able to join a poll by going to a given link, because I would like to vote.

As a Voter, I would like to be able to select my ranked choices from a given list of candidates, because I want my choices to have an impact on the final poll results.

As a Voter, I would like to every voter to only be able to vote once, because I want a fair poll. (Maybe use fingerprint.js here)

As a Voter, I would like to see the votes effected the poll results, because I want to make sure my votes were impactful.

As a Voter, I would like to be redirected to the results page after I vote because I would like view the results when they are available.

As a Voter, I would like to have a button to skip voting to the results page, because I want to just see the end result without voting.


TODO:
- Feature Idea: Think of some way to represent users vote in the final poll results screen. We're not sure how to do this yet, because we haven't done the UI mockups/built the UI
- Feature Idea: Maybe have a minigame after they voted so they have something to do while waiting for the results.
    - Embedded version for agar.io (room of only the people who are voting). 
    - Mini Capture The Flag (cyber security) challenge
- Feature Idea: X amount of votes have been made on the Voter screen
- Feature Idea: Timer countup (from time the poll was created)
- Feature Idea: Secret easter eggs?


# Technical Constraints
Simplified User stories

LIMIT 1000 candidates per poll
LIMIT >=2 candidates per poll
LIMIT >=2 candidates ranked per vote
    Reason: Force users to do ranked choice voting
UNIQUE Constraint on Candidate Name 
    Reason: Prevent users from confusing voters with same choice. If we add other values like description or image, we may revisit this.
