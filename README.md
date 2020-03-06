## API for getting data for centurions majors
To run the server locally
``` Yarn start ```

## Todo
Add typescript to app for better error handling and my own sanity

## API structure

``` GET: api/users ```
``` GET: api/events ```
``` GET: api/event/:id ```
``` POST: api/event ```
## Required fields for creating an event:
```javascript
{
  name: String,
  winner_id: Number,
  results: [ResultsObject]
}
```
##### Results Object should look like:
```javascript
{
    user_id: Number,
    gross_score: Number,
    net_score: Number || null,
    points: Number
}
```