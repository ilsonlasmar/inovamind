class TagSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :quote, serializer: QuoteSerializer
end
