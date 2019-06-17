import casual from 'casual';

casual.seed(777);

const fakeAccount = () => ({
	id: casual.uuid,
	name: casual.name,
	email: casual.email,
	phone: casual.phone,
	status: 'active'
});

const fakeAgent = () => ({
	__typename: 'Agent',
	id: casual.uuid,
	name: casual.name,
	email: casual.email,
	account: fakeAccount(),
	lastActive: '2019-05-13',
	status: 'inactive'
});

// Fake LocalStorage
class LocalStorageMock {
	constructor() {
		this.store = {};
	}

	clear() {
		this.store = {};
	}

	getItem(key) {
		return this.store[key] || null;
	}

	setItem(key, value) {
		this.store[key] = value.toString();
	}

	removeItem(key) {
		delete this.store[key];
	}
}

export { fakeAccount, fakeAgent, LocalStorageMock };
