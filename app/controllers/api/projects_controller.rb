class Api::ProjectsController < ApplicationController
  def index
    #limit projects to only those that match filter if present
    projects = filter ? Project.matches_filter(filter) : Project.all
    @projects = projects
  end

  def create
    @project = Project.new(project_params)
    @project.user_id = current_user.id
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    if @project.user_id != current_user.id
      render json: ["You can't edit projects you didn't create!"]
    else
      if @project.update(project_params)
        render :show
      else
        render json: @project.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render :show
  end

  private

  def project_params
    params
      .require(:project)
      .permit(
        :title, :intro, :cover_image,
        steps_attributes: [:id, :title, :image, :body, :order],
        keywords_attributes: [:id, :word]
      )
  end

  def filter
    params[:filter]
  end

end
