const sum = require('../src/index');

const GroverService = {
	add(a, b) {
		return a + b;
	}
};

class User {
	constructor(name, age, service) {
		this.name = name;
		this.age = age;
		this.service = service;
	}

	get getterUserAge() {
		return this.age;
	}

	addAge(ageToAdd) {
		this.age = this.service.add(this.getterUserAge, ageToAdd);
	}
}

describe('sum', () => {
	let user;
	let serviceSpy;

	beforeEach(() => {
		serviceSpy = jasmine.createSpyObj('serviceSpy', ['add']);

		user = new User('UserName', 10, GroverService);
	});

	it('should create', () => {
		expect(user).toBeTruthy();
	});

	it('should add user age', () => {
		serviceSpy.add.and.callFake((a, b) => a + b);

		user.addAge(1);

		expect(user.userAge).toBe(11);
	});

	it('should call service add once', () => {
		spyOn(GroverService, 'add');

		user.addAge(1);

		expect(GroverService.add).toHaveBeenCalledOnceWith(10, 1);
	});

	it('should call service add once', () => {
		spyOn(GroverService, 'add');
		spyOnProperty(user, 'userAge', 'get').and.returnValue(100);

		user.addAge(1);

		expect(GroverService.add).toHaveBeenCalledOnceWith(10, 1);
	});
});
