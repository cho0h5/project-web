package main

import (
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.File("index.html")
	})
	e.GET("/script.js", func(c echo.Context) error {
		return c.File("script.js")
	})
	e.GET("/data.json", func(c echo.Context) error {
		return c.File("data.json")
	})
	e.GET("/style.css", func(c echo.Context) error {
		return c.File("style.css")
	})
	e.Logger.Fatal(e.Start(":8080"))
}
