class ToDosController < ApplicationController
  def index
    toDos = ToDo.all
    render json: toDos
  end

  def create
    toDo = ToDo.create!(toDo_params)
  end

  def update
    toDo = ToDo.find(params[:id])
    toDo.update!(toDo_params)
    render json: toDo
  end

  private

  def toDo_params
    params.require(:to_dos).permit(:to_do)
  end

end