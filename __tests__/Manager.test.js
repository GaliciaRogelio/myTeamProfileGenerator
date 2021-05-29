const Manager = require("../lib/Manager");

test('creates manager object', () => {
    manager = new Manager('John Doe', '40', 'johnDoe@test.com', '404');

    expect(manager.name).toBe('John Doe');
    expect(manager.id).toBe('40');
    expect(manager.email).toBe('johnDoe@test.com');
    expect(manager.officeNumber).toBe('404');
});

test('gets managers office number', () => {
    manager = new Manager('John Doe', '40', 'johnDoe@test.com', '404');

    expect(manager.getOfficeNumber()).toBe('404');
});

test('gets managers role', () => {
    manager = new Manager('John Doe', '40', 'johnDoe@test.com', '404');

    expect(manager.getRole()).toBe("Manager");
});