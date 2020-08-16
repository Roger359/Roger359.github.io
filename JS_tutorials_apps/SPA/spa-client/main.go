package main

import (
	"github.com/labstack/echo"
	// "github.com/labstack/gommon/log"
)

func main() {
	e := echo.New()
	e.Static("/", "public")
	e.Start(":9494")
}