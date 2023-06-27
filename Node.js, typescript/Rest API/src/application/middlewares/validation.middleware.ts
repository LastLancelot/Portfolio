import express from 'express';
import { createValidator } from 'express-joi-validation';

const validator = createValidator();

export default validator;
