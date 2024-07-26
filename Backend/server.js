import express from 'express';

const app=express();


app.get('/api/jokes',(req,res)=>
{
const jokes=[
    {
      "id": 1,
      "title": "Math Joke",
      "joke": "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      "id": 2,
      "title": "Programming Joke",
      "joke": "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
      "id": 3,
      "title": "Animal Joke",
      "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      "id": 4,
      "title": "Music Joke",
      "joke": "Why did the musician get locked out of his house? He forgot the keys!"
    },
    {
      "id": 5,
      "title": "Physics Joke",
      "joke": "Why can't you trust an atom? Because they make up everything!"
    },
    {
      "id": 6,
      "title": "Math Joke",
      "joke": "Why was the equal sign so humble? Because he knew he wasn't less than or greater than anyone else!"
    },
    {
      "id": 7,
      "title": "Tech Joke",
      "joke": "Why was the computer cold? It left its Windows open!"
    },
    {
      "id": 8,
      "title": "Space Joke",
      "joke": "Why did the astronaut break up with his girlfriend? He needed space!"
    },
    {
      "id": 9,
      "title": "Food Joke",
      "joke": "Why don't eggs tell jokes? They'd crack each other up!"
    },
    {
      "id": 10,
      "title": "Nature Joke",
      "joke": "Why are frogs so happy? They eat whatever bugs them!"
    }
  ];
  res.send(jokes);
})
const port =process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('Server at http://localhost:${port}');
});