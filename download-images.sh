#!/bin/bash

# Создаем директории, если они не существуют
mkdir -p public/images/cars
mkdir -p public/images/team

# Загружаем изображения автомобилей
curl -o public/images/cars/rolls-royce-cullinan.jpg "https://images.unsplash.com/photo-1631295868223-63265b40d9e4"
curl -o public/images/cars/lamborghini-urus.jpg "https://images.unsplash.com/photo-1632245889029-e406faaa34bc"
curl -o public/images/cars/mercedes-maybach.jpg "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8"
curl -o public/images/cars/bentley-bentayga.jpg "https://images.unsplash.com/photo-1626289535731-49d0c5c2d5c7"
curl -o public/images/cars/porsche-911.jpg "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e"
curl -o public/images/cars/ferrari-sf90.jpg "https://images.unsplash.com/photo-1592198084033-aade902d1aae"

# Загружаем изображение для страницы "О нас"
curl -o public/images/about-hero.jpg "https://images.unsplash.com/photo-1621274220348-41dc235ff439"

# Загружаем изображения команды
curl -o public/images/team/member-1.jpg "https://images.unsplash.com/photo-1560250097-0b93528c311a"
curl -o public/images/team/member-2.jpg "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
curl -o public/images/team/member-3.jpg "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 