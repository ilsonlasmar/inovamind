module Api
  module V1
    class BaseController < ActionController::API
      include ActionController::MimeResponds

      def authenticate_request
        token = request.headers['Authorization'] ? request.headers['Authorization'].split(' ').last : nil
        @current_user = AuthToken.verify(token)
        render json: { error: 'Not Authorized' }, status: 401 unless @current_user
      end      

    end
  end
end
