const Engineer = require("../lib/Engineer");

test('Creates enginineer object', () => {
    const engineer = new Engineer('Rogelio', '29', 'galiciar0513@gmail.com', 'galiciaRogelio');

    expect(engineer.name).toBe('Rogelio');
    expect(engineer.id).toBe('29');
    expect(engineer.email).toBe('galiciar0513@gmail.com');
    expect(engineer.github).toBe('galiciaRogelio');
});

test('gets engineers github', () => {
    const engineer = new Engineer('Rogelio', '29', 'galiciar0513@gmail.com', 'galiciaRogelio');

    expect(engineer.getGithub()).toBe('galiciaRogelio')
})

test('gets role of engineer', () => {
    const engineer = new Engineer('Rogelio', '29', 'galiciar0513@gmail.com', 'galiciaRogelio');

    expect(engineer.getRole()).toBe('Engineer');
});