class Tag
  include Mongoid::Document
  field :name, type: String
  has_and_belongs_to_many :quotes

  def self.search(term)
    ScrapeWorker.perform_async    
    Tag.where(name: term).first    
  end
end
