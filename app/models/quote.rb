class Quote
  include Mongoid::Document
  field :description, type: String
  field :author, type: String
  field :author_about, type: String
  has_and_belongs_to_many :tags

  accepts_nested_attributes_for :tags


end
