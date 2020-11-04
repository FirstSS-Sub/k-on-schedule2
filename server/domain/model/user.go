package model

import (
	"github.com/jinzhu/gorm"
)

type User struct {
	gorm.Model
	Name     string
	Thu      string
	Fri      string
	Sat      string
	Sun      string
	Mon      string
	Tue      string
	Wed      string
	Comments []Comment `gorm:"foreignKey:UserID"` // ; はいらない？
	Groups   []*Group  `gorm:"many2many:user_group;"`
}
