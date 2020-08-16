package main

const token = "ESTEESUNTOKENMUYSEGUROQUENADIEPUEDEVIOLENTAR:)"
var users []*User


// Estrucutura de los usuarios 
type User struct {
	Nick string `json:"nick"`
	Password string `json:"password"`
}

// function para agregar usuarios
func addUser(u *User) {
	users = append(users, u)
}

// Validacion del usuario
func login(u *User) bool {
	for _, v:= range users {
		if v.Nick == u.Nick && v.Password == u.Password {
			return true
		}
	}
	return false
}

// Esta estrucutra es para responder al cliente
type MessageResponse struct {
	Type string `json:"type"`
	Message string `json:"message"`
	Data interface{} `json:"data"`
}

type MessageWS struct {
	
	Type string `json:"type"`
	From string `json:"from"`
	Message string `json:"message"`
	Data interface{} `json:"data"`
	
}