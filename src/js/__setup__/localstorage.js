const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

Object.defineProperty(global,  'localStorage', {
	value: localStorageMock,
	writable: true,
});

beforeEach(() => {
	global.localStorage.getItem.mockReturnValue(null);
});

afterEach(() => {
	global.localStorage.getItem.mockReset();
	global.localStorage.setItem.mockReset();
	global.localStorage.removeItem.mockReset();
	global.localStorage.clear.mockReset();
});