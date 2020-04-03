class Employee {
    constructor(name, id, email) {
        this.name = name
        this.email = email
        this.id = id
    }
    getId() {
        return this.id
    }
    getName() {
        return this.name
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;