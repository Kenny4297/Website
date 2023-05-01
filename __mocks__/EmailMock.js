const sendForm = jest.fn().mockImplementation(() => Promise.resolve('success'));

export default sendForm;