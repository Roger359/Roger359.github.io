// los handlers

package main

import (

	"github.com/labstack/echo"
	"log"
	"net/http"

	)
	

// FUNCION para registrarse

func Register(c echo.Context) error {
	m := &MessageResponse{}
	u := &User{}

	err := c.Bind(u) // lo que envie el cliente guardalo en "u"
	if err != nil {

		log.Printf("La estructura recibida no es valida: %v", err)
		m.Type = "error"
		m.Message = "La estructura no es valida"
		return c.JSON(http.StatusBadRequest,m)
	}

	addUser(u)
	m.Type = "ok"
	m.Message = "Registrado correctamente"
	return c.JSON(http.StatusCreated, m)
}

func Login(c echo.Context) error {
	m := &MessageResponse{}
	u := &User{}

	err := c.Bind(u)
	if err != nil {
		log.Printf("La estructura recibida no es valida: %v", err)
		m.Type = "error"
		m.Message = "la estructura no es valida"
		return c.JSON(http.StatusBadRequest, m)
	}

	if !login(u) {
		m.Type = "error"
		m.Message = "Usuario o contraseña no validos"
		return c.JSON(http.StatusUnauthorized, m)
	}
	m.Type = "ok"
	m.Message = "Bienvenido"
	m.Data = token 
	/// JWT 
	return c.JSON(http.StatusOK,m)
}
