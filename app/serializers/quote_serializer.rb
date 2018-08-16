class QuoteSerializer
  include FastJsonapi::ObjectSerializer

  DEFAULT_INCLUDES = [:tags]

  attributes :description, :author, :author_about
  has_many :tags, serializer: TagSerializer
  

end
