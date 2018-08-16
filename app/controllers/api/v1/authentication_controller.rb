module Api
    module V1
      class AuthenticationController < Api::V1::BaseController
        
        def signin            
          user = User.find_by email: params[:email]
          jwt = user.authenticate(params[:password]) ? AuthToken.token(user) : nil        
          render json: { jwt: jwt }
        end

       end
    end
  end