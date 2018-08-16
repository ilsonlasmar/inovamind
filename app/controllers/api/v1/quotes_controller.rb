module Api
    module V1
      class QuotesController < Api::V1::BaseController
        before_action :authenticate_request
        
        def search
          tag = Tag.search(params[:search])
          quotes = tag ? tag.quotes : nil
          options = {}
          options[:include] = QuoteSerializer::DEFAULT_INCLUDES
          render json: QuoteSerializer.new(quotes, options).serialized_json
        end
      end
    end
  end