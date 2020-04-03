const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email)
        this.officeNumber = officenumber
    }
    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager