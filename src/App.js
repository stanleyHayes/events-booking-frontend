import './App.css';
import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/home/home-page";
import AccountPage from "./pages/authentication/account-page";
import ChangePasswordPage from "./pages/authentication/change-password-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import LoginPage from "./pages/authentication/login-page";
import RegisterPage from "./pages/authentication/register-page";
import ReservationsPage from "./pages/reservations/reservations-page";
import ReservationDetailPage from "./pages/reservations/reservation-detail-page";
import MyReservationsPage from "./pages/reservations/my-reservations-page";
import EventReservationsPage from "./pages/reservations/event-reservations-page";
import MyEventsPage from "./pages/events/my-events-page";
import EventsPage from "./pages/events/events-page";
import EventDetailPage from "./pages/events/event-detail-page";
import CreateEventPage from "./pages/events/create-event";

function App() {
  return (
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>

        <Route path="/account" exact={true}>
          <AccountPage />
        </Route>

        <Route path="/auth/change-password" exact={true}>
          <ChangePasswordPage />
        </Route>

        <Route path="/auth/forgot-password" exact={true}>
          <ForgotPasswordPage />
        </Route>

        <Route path="/auth/login" exact={true}>
          <LoginPage />
        </Route>

        <Route path="/auth/register" exact={true}>
          <RegisterPage />
        </Route>

        <Route path="/new/event" exact={true}>
          <CreateEventPage />
        </Route>

          <Route path="/events/:eventID" exact={true}>
              <EventDetailPage />
          </Route>

          <Route path="/events" exact={true}>
              <EventsPage />
          </Route>
          <Route path="/users/:userID/events" exact={true}>
              <MyEventsPage />
          </Route>

          <Route path="/events/:eventID/reservations" exact={true}>
              <EventReservationsPage />
          </Route>

          <Route path="/users/:userID/reservations" exact={true}>
              <MyReservationsPage />
          </Route>

          <Route path="/reservation/:reservationID" exact={true}>
              <ReservationDetailPage />
          </Route>

          <Route path="/reservations" exact={true}>
              <ReservationsPage />
          </Route>
      </Switch>

  );
}

export default App;
