class Api::V1::StocksController < ApplicationController
  before_action :get_base
  def get_base
    @url="https://api.iextrading.com/1.0/"
  end

  # COMMENT OUT INDEX IF NOT BEING USED
  def sector_performance
    sector_url = "#{@url}stock/market/sector-performance"
    index_url = "#{@url}stock/market/batch?symbols=DIA,SPY,IWM&types=quote&filter=changePercent"
    sector_results = JSON.parse(RestClient.get(sector_url))
    index_results = JSON.parse(RestClient.get(index_url))
    sector_results = sector_results.sort_by{|obj| obj['performance']}.reverse!
    render json: {sector: sector_results,index: index_results}, status: :ok
  end

  def gainers_losers
    gainer_url= "#{@url}stock/market/list/gainers"
    loser_url= "#{@url}stock/market/list/losers"
    gainer_result = JSON.parse(RestClient.get(gainer_url))
    loser_result = JSON.parse(RestClient.get(loser_url))
    gainer_formatted = gainer_result.map{|gainer| {symbol: gainer['symbol'], name: gainer['companyName'], change: (gainer['changePercent']*100).to_f.round(2), price: gainer['latestPrice'].to_f.round(2)}}.sort_by{|gainer| gainer[:change]}.reverse!
    loser_formatted = loser_result.map{|loser| {symbol: loser['symbol'], name: loser['companyName'], change: (loser['changePercent']*100).to_f.round(2), price: loser['latestPrice'].to_f.round(2)}}.sort_by{|loser| loser[:change]}
    render json: {gainers: gainer_formatted, losers:loser_formatted}, status: :ok
  end

  def tickers
    new_url = "#{@url}ref-data/symbols?filter=symbol,name"
    results = JSON.parse(RestClient.get(new_url))
    formatted = results.each_with_index.map do |result,index|
      {key:index,"title":result["name"], "symbol":result["symbol"]}
    end

    render json: formatted, status: :ok
  end

  def chart
    new_url = "#{@url}stock/#{params[:id]}/chart/5y?filter=date,close,volume,open"
    results = JSON.parse(RestClient.get(new_url))
    render json: results, status: :ok
  end

  def price
    new_url = "#{@url}stock/#{params[:id]}/price"
    result = RestClient.get(new_url)
    new_url2 = "#{@url}stock/#{params[:id]}/quote?filter=close"
    result2 = JSON.parse(RestClient.get(new_url2))
    render json: {"price":result, "start":result2["close"]}, status: :ok
  end

  def logo
    new_url = "#{@url}stock/#{params[:id]}/logo"
    new_url2 = "#{@url}stock/#{params[:id]}/quote?filter=companyName"
    result = JSON.parse(RestClient.get(new_url))
    result2 = JSON.parse(RestClient.get(new_url2))
    render json: {url: result['url'], companyName: result2['companyName']}, status: :ok
  end

  def news
    uri = URI("https://api.nytimes.com/svc/topstories/v2/business.json")
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    uri.query = URI.encode_www_form({
      "api-key" => ENV['NEWS']
    })
    request = Net::HTTP::Get.new(uri.request_uri)
    result = JSON.parse(http.request(request).body)
    array_of_articles = result["results"][0,5]
    formatted_array_of_articles = array_of_articles.map do |article|
      article_multimedia = article["multimedia"].find{|pic| pic["format"]=="Normal"}
      img_source = article_multimedia["url"]

      {title: article["title"], url:article["url"], imgSrc:img_source, abstract:article["abstract"]}
    end
    render json: {news:formatted_array_of_articles}, status: :ok
  end
end
