#### CREATE USER ####
user = user = User.new(email: 'ilson.lasmar@gmail.com', password: '123456', password_confirmation: '123456')
user.save

### FIRST CRAWLER ###
QuoteScrape.new.exec

