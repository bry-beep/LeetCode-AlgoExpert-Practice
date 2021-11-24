class Name {
	constructor(name1, name2) {
		this.fname = name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase();
		this.lname = name2.charAt(0).toUpperCase() + name2.slice(1).toLowerCase();
		this.fullname = this.fname + ' ' + this.lname;
		this.initials = this.fname.charAt(0) + '.' + this.lname.charAt(0);
	}
}

module.exports = Name;
