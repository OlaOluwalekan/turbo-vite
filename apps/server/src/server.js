import 'dotenv/config';
import express from 'express';
import cors from 'cors';
// import { add } from '@repo/math/add'
// import { subtract } from '@repo/math/subtract'
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (_, res) => {
    res.status(200).json('Home Again');
});
app.post('/calculate', (req, res) => {
    const { operation, numbers } = req.body;
    let result = 0;
    if (operation === '+') {
        // result = add(numbers.first, numbers.second)
    }
    else {
        // result = subtract(numbers.first, numbers.second)
    }
    //   console.log('server | calculate ==>', req.body)
    res.status(200).json({ result });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
