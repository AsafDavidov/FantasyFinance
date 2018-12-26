class Api::V1::StocksController < ApplicationController
  before_action :get_base
  def get_base
    @url="https://api.iextrading.com/1.0/"
  end

  def sector_performance
    sector_url = "#{@url}stock/market/sector-performance"
    index_url = "#{@url}stock/market/batch?symbols=DIA,SPY,IWM&types=quote&filter=changePercent"
    sector_results = JSON.parse(RestClient.get(sector_url))
    index_results = JSON.parse(RestClient.get(index_url))
    sector_results = sector_results.sort_by{|obj| obj['performance']}.reverse!
    render json: {sector: sector_results,index: index_results}, status: :ok
  end
  def tickers
    new_url = "https://pkgstore.datahub.io/core/s-and-p-500-companies/constituents_json/data/64dd3e9582b936b0352fdd826ecd3c95/constituents_json.json"
    results = JSON.parse(RestClient.get(new_url))
    formatted = results.each_with_index.map do |result,index|
      {key:index,"title":result["Name"], "sector":result["Sector"], "symbol":result["Symbol"]}
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
    new_url2 = "#{@url}stock/#{params[:id]}/quote?filter=open"
    result2 = JSON.parse(RestClient.get(new_url2))
    render json: {"price":result, "start":result2["open"]}, status: :ok
  end
  def logo
    new_url = "#{@url}stock/#{params[:id]}/logo"
    result = JSON.parse(RestClient.get(new_url))
    render json: result, status: :ok
  end
end
