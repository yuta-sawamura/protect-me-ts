import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// app.get('/', (_, res) => {
//   res.render('index', {
//     text: 'Hello World!',
//   });
// });

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
