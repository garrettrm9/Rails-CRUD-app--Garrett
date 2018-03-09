# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
to_do1 = ToDo.create(to_do: 'Clean the cat')
to_do2 = ToDo.create(to_do: 'Feed the car')
to_do3 = ToDo.create(to_do: 'Sweep the kids')
to_do4 = ToDo.create(to_do: 'Pick up the floor')

event1 = Event.create(event: 'Fly to the moon')
event2 = Event.create(event: 'Have some good old-fashioned fun')
event3 = Event.create(event: 'Fly back to earth')
event4 = Event.create(event: 'Realize I left my wallet on the moon')
event5 = Event.create(event: "Experience existential dread and ponder man's limitation and cosmic isolation")