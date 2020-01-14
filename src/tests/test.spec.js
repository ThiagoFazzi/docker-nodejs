import chai  from 'chai'
import chaiHttp  from 'chai-http'
import app from '../index'

chai.use(chaiHttp)
chai.should()

describe("Tests", () => {
  
  describe("Get all records", () => {
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

  describe("Get record by Id", () => {
    it("should get specific record by provide Id", (done) => {
      chai.request(app)
        .get('/test/5e1d80a5c78d04004d9952a9')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })
  })

})