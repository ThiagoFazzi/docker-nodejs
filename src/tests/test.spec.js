import chai  from 'chai'
import chaiHttp  from 'chai-http'
import app from '../index'

chai.use(chaiHttp)
chai.should()

describe("Tests", () => {
  describe("GET /", () => {
    it("shuld get all tests record", (done) => {
      chai.request(app)
        .get('/test/all')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })
  })
})