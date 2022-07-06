test('Demonstration', async () => {
    const formData = new FormData();
    formData.set('email', 'email@domain.de');

    const request = new Request('https://domain.de/my/path', {
        method: 'POST',
        headers: {},
        body: formData
    });

    const requestData = await request.formData();
    expect(requestData.get('email')).equals('email@domain.de');
});
