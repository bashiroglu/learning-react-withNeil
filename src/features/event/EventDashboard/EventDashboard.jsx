import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createEvent, updateEvent, deleteEvent } from '../eventActions';

import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  // handleIsOpenToggle = () => {
  //   this.setState(({ isOpen }) => ({
  //     isOpen: !isOpen
  //   }));
  // };
  handleCreateFormOpen = () => {
    this.setState({ isOpen: true, selectedEvent: null });
  };
  handleCreateFormCancel = () => {
    this.setState({ isOpen: false });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    this.props.createEvent(newEvent);
    this.setState(({ events }) => ({
      isOpen: false
    }));
  };
  handleSelectedEvent = event => {
    this.setState({ selectedEvent: event, isOpen: true });
  };
  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState(({ events }) => ({
      isOpen: false,
      selectedEvent: null
    }));
  };
  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            deleteEvent={this.handleDeleteEvent}
            selectEvent={this.handleSelectedEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            positive
            content="Create Event"
            onClick={this.handleCreateFormOpen}
          />
          {isOpen && (
            <EventForm
              updateEvent={this.handleUpdateEvent}
              key={
                selectedEvent ? selectedEvent.id : 0
              } /* this key help react to manage this particular event click  */
              selectedEvent={selectedEvent}
              cancelFormOpen={this.handleCreateFormCancel}
              createEvent={this.handleCreateEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}
const mapStateToProps = state => ({
  events: state.events
});
const mapDispatchToProps = {
  createEvent,
  updateEvent,
  deleteEvent
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);
