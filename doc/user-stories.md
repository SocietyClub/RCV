User Stories for MVP Milestone

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

TODO
- Warn on bad decisions (EX. Number of candidates a voter can rank == 1)
- Decide if we want any poll to have a constant number of candidates on a vote (Force upper bound of candidates a voter can rank is X).
- Decide if we want to allow two candidates with the same name

## Voter

As a Voter, I would like to be able to join a poll by going to a given link, because I would like to vote.

As a Voter, I would like to be able to select my ranked choices from a given list of candidates, because I want my choices to have an impact on the final poll results.

TODO

## Viewer
TODO
