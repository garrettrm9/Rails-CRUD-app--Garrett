class ToDosController < ApplicationController
    def index
    toDos = ToDo.all
    render json: toDos
  end
end
