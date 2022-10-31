fixture`request`;
test("GET request", async (t) => {
    const result = await t.request({
        url: `https://jsonplaceholder.typicode.com/todos/1`,
        method: "GET"
    });
    console.log(result.body);
    await t.expect(result.body.title).eql("delectus aut autem");
    await t.expect(result.status).eql(200);
})