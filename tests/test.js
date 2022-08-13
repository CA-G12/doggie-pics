/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const supertest = require('supertest');
const router = require('../src/router');

test('home route', (done) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
});
// ***********************************************************************************
test('home route css', (done) => {
  supertest(router)
    .get('/index.css')
    .expect(200)
    .expect('Content-Type', /css/)
    .end((err) => {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
});
// ***********************************************************************************************
test('home route faiuler', (done) => {
  supertest(router)
    .get('/invalid')
    .expect(404)
    .end((err, res) => {
      if (err) {
        done(err);
      } else {
        res.write('baka');
        done();
      }
    });
});
