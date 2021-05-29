const Intern = require("../lib/Intern");

test('creates intern object', () => {
    const intern = new Intern('Jane Doe', '20', 'janeDoe@test.com', 'UC Berkeley');

    expect(intern.name).toBe('Jane Doe');
    expect(intern.id).toBe('20');
    expect(intern.email).toBe('janeDoe@test.com');
    expect(intern.school).toBe('UC Berkeley');
});

test('gets the interns school', () => {
    const intern = new Intern(' Jane Doe', '20', 'janeDoe@test.com', 'UC Berkeley');

    expect(intern.getSchool()).toBe('UC Berkeley');
});

test('gets the interns role', () => {
    const intern = new Intern('Jane Doe', '20', 'janeDoe@test.com', 'UC Berkeley');

    expect(intern.getRole()).toBe('Intern');
});