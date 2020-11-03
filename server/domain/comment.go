package domain

import "github.com/jinzhu/gorm"

type Comment struct {
	gorm.Model
	UserID  int
	Content string
}
