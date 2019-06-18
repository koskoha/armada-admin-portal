import casual from 'casual';

casual.seed(777);

const fakeAccount = () => ({
	uuid: casual.uuid,
	name: casual.name,
	email: casual.email,
	phone: casual.phone,
	status: 'active'
});

const fakeAgent = () => ({
	__typename: 'Agent',
	uuid: casual.uuid,
	name: casual.name,
	email: casual.email,
	account: fakeAccount().name,
	lastActive: casual.date('YYYY-MM-DD'),
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
