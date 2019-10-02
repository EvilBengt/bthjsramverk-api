process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../app");

chai.should();

chai.use(chaiHttp);

describe("Users", () => {
    describe("POST /login", () => {
        it("Should return 401 for invalid user", done => {
            chai.request(server)
                .post("/login")
                .type("form")
                .send({
                    login: "idonotexist",
                    password: "notmypassword"
                })
                .end((err, res) => {
                    res.should.have.status(401);
                });

                done();
        });
        it("Should return 401 for wrong password", done => {
            chai.request(server)
                .post("/login")
                .type("form")
                .send({
                    login: "test",
                    password: "notmypassword"
                })
                .end((err, res) => {
                    res.should.have.status(401);
                });

                done();
        });
        it("Should return 200 with token for correct login", done => {
            chai.request(server)
                .post("/login")
                .type("form")
                .send({
                    login: "test",
                    password: "test"
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.should.be.an("object");
                    res.body.data.token.should.be.an("string");
                });

                done();
        });
    });
    describe("POST /register", () => {
        it("Should return 201 when created new user", done => {
            chai.request(server)
                .post("/register")
                .type("form")
                .send({
                    name: "newuser",
                    email: "new.user@test.test",
                    password: "thenewuserspassword",
                    birthdate: "1970-01-01"
                })
                .end((err, res) => {
                    res.should.have.status(201);
                });

                done();
        });
        it("Should be able to login to newly created user", done => {
            chai.request(server)
                .post("/register")
                .type("form")
                .send({
                    name: "newuser",
                    email: "new.user@test.test",
                    password: "thenewuserspassword",
                    birthdate: "1970-01-01"
                })
                .end((err, res) => {
                    chai.request(server)
                        .post("/login")
                        .type("form")
                        .send({
                            login: "newuser",
                            password: "thenewuserspassword"
                        })
                        .end((err, res) => {
                            res.should.have.status(200);
                        });
                });

                done();
        });
    });
});
