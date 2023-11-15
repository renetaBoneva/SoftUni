const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const expect = chai.expect;

chai.use(chaiHttp);

describe("Books API", () => {
    let bookId;

    it("should POST a book", (done) => {
        const book = { id: "1", title: "Test Book123", author: "Test author" };
        chai.request(server)
            .post('/books')
            .send(book)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('title');
                expect(res.body).to.have.property('author');
                bookId = res.body.id;
                done();
            })
    })

    it('Should get all books', (done) => {
        chai.request(server)
            .get('/books')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                done();
            })
    })

    it('Should get a single book', (done) => {
        chai.request(server)
            .get(`/books/${bookId}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('title');
                expect(res.body).to.have.property('author');
                done();
            })
    })
    it('Should PUT an existing book', (done) => {
        const updatedBook = { id: bookId, title: "Updated Book123", author: "Test author" };
        chai.request(server)
            .put(`/books/${bookId}`)
            .send(updatedBook)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                expect(res.body.title).to.equal(updatedBook.title)
                done()
            })
    })
    it('Should DELETE an existing book', (done) => {
        chai.request(server)
            .delete(`/books/${bookId}`)
            .end((err, res) => {
                expect(res).to.have.status(204);
                done()
            })
    })
    it('Should return 404 on CRUD operations over non-existing book', (done) => {
        bookId = '9999'
        const updatedBook = { id: bookId, title: "Non-existing Book123", author: "Test author" };

        chai.request(server)
            .get(`/books/${bookId}`)
            .end((err, res) => {
                expect(res).to.have.status(404);
            })

        chai.request(server)
            .put(`/books/${bookId}`)
            .send(updatedBook)
            .end((err, res) => {
                expect(res).to.have.status(404);
            })
        chai.request(server)
            .delete(`/books/${bookId}`)
            .end((err, res) => {
                expect(res).to.have.status(404);
                done()
            })
    })
})