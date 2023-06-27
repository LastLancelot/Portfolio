import express from 'express';
import cors from 'cors';
import logger from './middlewares/logger.middleware';
import studentsRouter from '../student/student.router';
import groupsRouter from '../group/group.router';
import bodyParser from 'body-parser';
import exceptionFilter from './middlewares/exceptions.fiter';
import path from 'path';
import auth from './middlewares/auth.middleware';

export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger);
app.use(auth);

const staticFilesPath = path.join(__dirname, '../', 'public');

app.use('/api/v1/public', express.static(staticFilesPath));
app.use('/api/v1/students', studentsRouter);
app.use('/api/v1/groups', groupsRouter);

app.use(exceptionFilter);
