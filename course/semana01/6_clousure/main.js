function box (secreto, pass) {
	var pass = pass
	return function (passUser) {
		return (passUser === pass) ? secreto : "Wrong Pass"
	}
}

var box1 = box("Susurrando a los Developers", "David")
box1("david")
box1("David")

var box2 = box("Me llamo Victor", "Victor")

box2("Victor")
box1("David")

function box (secreto, pass) {
	var pass = pass
	return {
		getSecret: function (passUser) {
			return (passUser === pass) ? secreto : "Wrong Pass"
		},
		setSecret: function (secretUser,passUser) {
			return (passUser === pass) ? secreto = secretUser : "Wrong Pass"
		},
		setPassword: function (newPass,passUser) {
			return (passUser === pass) ? pass = newPass : "Wrong Pass"
		}
	}
}