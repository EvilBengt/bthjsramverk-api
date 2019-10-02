process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../app");

chai.should();

chai.use(chaiHttp);

const testReport = (nr) => () => {
    it("Should return 200 with data", done => {
        chai.request(server)
            .get("/reports/week/" + nr)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an("object");
                res.body.data.should.be.an("object");
                res.body.data.week.should.be.an("object");
                res.body.data.week.week.should.be.an("number");
                res.body.data.week.text.should.be.an("string");
            });

            done();
    });
};

describe("Reports", () => {
    describe("GET /reports/weeks", () => {
        it("Should return 200 with a list of all reports", done => {
            chai.request(server)
                .get("/reports/weeks")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.should.be.an("object");
                    res.body.data.weeks.should.be.an("array");
                });

                done();
        });
    });

    [1, 2, 3].forEach(nr => {
        describe("GET /reports/week/" + nr, testReport(nr));
    });
});
