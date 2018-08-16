class QuoteScrape
  @@uri = 'http://quotes.toscrape.com'

  def exec
    miner_website
  end

  def self.uri
    @@uri
  end

  private 
  def miner_website
    page = Scrape.get(QuoteScrape.uri)
    parse_page = Nokogiri::HTML(page)
    quotes = parse_page.css(".quote")
    quotes.each do |quote_element|
        description = quote_element.css('.text').text      
        author = quote_element.css('.author').text
        author_about = "#{QuoteScrape.uri}#{quote_element.css('span')[1].css('a')[0]['href']}"
        tags = []
        tags_elements = quote_element.css('.tags')
        tags_elements.css('.tag').each do |tag|
        tags.push(Tag.find_or_create_by(name: tag.text))
        end
        
        quote = Quote.find_or_initialize_by(description: description)
        quote.author = author
        quote.author_about = author_about
        quote.tags = tags
        quote.save
    end
  end
end
