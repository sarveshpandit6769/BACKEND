import express from 'express';

// require('dotenv').config()

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is Ready');
// });

const port = process.env.PORT || 8000;

// get a  list of 5 jokes 

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            joke: "Why don't scientists trust atoms? Because they make up everything!",
            content: 'This is a sample joke content.'
        },
        {
            id: 2,
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
            content: 'This is a sample joke content.'
        },
        {
            id: 3,
            joke: "Why don't skeletons fight each other? They don't have the guts.",
            content: 'This is a sample joke content.'
        },
        {
            id: 4,
            joke: "What do you call fake spaghetti? An impasta!",
            content: 'This is a sample joke content.'
        },
    ];
    res.send(jokes);
});

// const githubData = {
//     "name": 'John Doe',
//     "username": 'johndoe',
//     "company": null,
//     "id": 11613311,
//     "followers": 128,
//     "following": 54,
//     "location": 'India',
//     "bio": 'Software developer and open source enthusiast.',
//     "hireable": null,
//     "email": null,
//     "twitter username": "johndoe_dev@twitter",
//     "created at": '2024-05-20',
//     "updated at": '2025-12-15',
//     "blog": "https://youtu.be/7fjOw8ApZ1I?si=1_2ZBG4huPJetDUq"
// }



app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
}
);