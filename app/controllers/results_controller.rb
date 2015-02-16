class ResultsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  respond_to :json

  def index
    @results = Result.all
    #respond_to do |format|
     # format.xls {send_data @results.to_csv(col_sep: "\t")}
    #end
    send_data @results.to_csv(col_sep: "\t")
  end

  def create
    params.permit!
    @result = Result.create(params[:result])
  end
end
