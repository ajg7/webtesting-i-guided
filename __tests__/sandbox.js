describe("trying out jest", () => {
    it("should compare objects", () => {
        expect({}).not.toBe({ a: 1 });
        expect([]).not.toBe([]);
    })
    it("should compare objects", () => {
        expect({ a: 1 }).toEqual({ a: 1 });
        expect([1, 2]).toStrictEqual([1, 2]);
    })

    describe("skipping tests", () => {
        it.skip("should compare objects", () => {
            expect({ a: 1 }).not.toBe({ a: 1 });
            expect([]).not.toBe([]);
        })

        it.only("current test", () => {
            expect({ a: 1 }).not.toBe({ a: 1 });
            expect([1, 2]).not.toBe([1, 2]);
        })
    })
})