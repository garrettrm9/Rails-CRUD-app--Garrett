class EventsController < ApplicationController
  def index
    events = Event.all
    render json:events
  end

  def create
    event = Event.create!(event_params)
    render json:event
  end

  def update
    event = Event.find(params[:id])
    event.update!(event_params)
    render json: event
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy!
    render plain: "What's the only thing more fun than that event you just completed? ... Deleting it off this list!"
  end

  private

  def event_params
    params.require(:events).permit(:event)
  end

end
