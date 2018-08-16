class ScrapeWorker
  include Sidekiq::Worker

  def perform(*args)
    QuoteScrape.new.exec
  end
end
