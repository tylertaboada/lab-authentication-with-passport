'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');
const roleRouteGuard = require('./../middleware/role-route-guard');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello World!' });
});

router.get('/private', routeGuard, (req, res, next) => {
  res.render('authentication/private');
});

router.get(
  '/student',
  routeGuard,
  roleRouteGuard(['student', 'teacher', 'assistant']),
  (req, res, next) => {
    res.render('student');
  }
);

router.get(
  '/assistant',
  routeGuard,
  roleRouteGuard(['teacher', 'assistant']),
  (req, res, next) => {
    res.render('assistant');
  }
);

router.get(
  '/teacher',
  routeGuard,
  roleRouteGuard(['teacher']),
  (req, res, next) => {
    res.render('teacher');
  }
);

module.exports = router;
