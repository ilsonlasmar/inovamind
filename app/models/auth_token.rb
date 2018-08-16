class AuthToken
    def self.key
      Rails.application.credentials.secret_key_base
    end
  
    def self.token(user)
      payload = {user_id: user.id}
      JsonWebToken.sign(payload, key: key)
    end
  
    def self.verify(token)      
      begin
        result = JsonWebToken.verify(token, key: key)        
      rescue
        return nil  
      end      
      return nil if result[:error]      
      return User.find_by(id: result[:ok][:user_id]["$oid"])      
    end
end