puts "Starting to seed"

puts "Seeding Users"
User.create(first_name:"Asaf",last_name:"Dav",username:"asafDav", password:"pass")
User.create(first_name:"Bernie",last_name:"Maddof",username:"bmad", password:"pass")
User.create(first_name:"Jordan",last_name:"Belfort",username:"jbel", password:"pass")
User.create(first_name:"Warren",last_name:"Buffet",username:"wbuf", password:"pass")

puts "Seeding Leagues"
l = League.create(name:"League of Champions", start_balance: 100000, end_date: DateTime.strptime('01/14/2019 8:00', "%m/%d/%Y %H:%M"))

puts "Seeding Portfolios"

Portfolio.create(user_id: 1, league_id: l["id"], current_balance: l["start_balance"], name:"Asaf Portfolio")
Portfolio.create(user_id: 2, league_id: l["id"], current_balance: l["start_balance"], name:"Bernie Portfolio")
Portfolio.create(user_id: 3, league_id: l["id"], current_balance: l["start_balance"], name:"Jordan Portfolio")
Portfolio.create(user_id: 4, league_id: l["id"], current_balance: l["start_balance"], name:"Warren Portfolio")

puts "Seeding complete"
