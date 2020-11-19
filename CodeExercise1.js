function foo() {
    this.count++;
  }
  foo.count = 0;
  
  for (let i = 0; i < 10; i++) {
    // How could you change this expression to pass test?
    foo.countd = foo;
    foo.countd();
  }
  
  describe("task", function() {
    it("should return right count", function() {
      expect(foo.count).to.equal(10);
    });
  });
  