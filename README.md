# Firebase Realtime Database Query Unexpected Results

This repository contains a demonstration of an unexpected result when using Firebase Realtime Database queries.  The issue involves correctly structuring a query but then failing to properly parse the results received from the Firebase database.

## Bug Description
The provided Javascript code attempts to query a Firebase Realtime Database for a user named 'John'. While the query itself is valid, the way in which the resulting snapshot is handled is incorrect and leads to unexpected behavior.

## Solution
The solution demonstrates how to correctly access the data within the snapshot object returned by the Firebase query.
