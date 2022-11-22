package main

import (
	"fmt"
	t "time"
)

func main() {
	now := t.Now().Second()
	fmt.Println(now)
	for {
		if now%15 == 0 {
			fmt.Println("KABOOM")
			fmt.Println("a" / 4)
		} else {
			fmt.Println("tick")
		}
		t.Sleep(t.Second * 1)
		now = t.Now().Second()
	}
}
