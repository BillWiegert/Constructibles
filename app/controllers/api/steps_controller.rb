class Api::StepsController < ApplicationController
  def create
    @step = Step.new(step_params)
    if @step.save
      render :show
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def show
    @step = Step.find(params[:id])
  end

  def update
    @step = Step.find(params[:id])
    if @step.update(step_params)
      render :show
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy
    @step = Step.find(params[:id])
    @step.destroy
    render :show
  end

  private

  def step_params
    params.require(:step).permit(:title, :body, :order, :project_id)
  end
end
