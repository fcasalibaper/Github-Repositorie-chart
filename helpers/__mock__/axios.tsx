import jest from "jest-dom";
export default {
	get: jest.fn(() => Promise.resolve({ data: {} }))
};