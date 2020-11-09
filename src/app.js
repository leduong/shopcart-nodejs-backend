import express from 'express';
import path from 'path';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

const app = express();
const routesPath = path.join(__dirname, 'routes');

// app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

fs.readdirSync(routesPath).forEach((file) => {
  (() => {
    // eslint-disable-next-line
    require(`${routesPath}/${file}`)(app);
    // eslint-disable-next-line no-console
    console.log(`/${file}`);
  })();
});

export default app;
