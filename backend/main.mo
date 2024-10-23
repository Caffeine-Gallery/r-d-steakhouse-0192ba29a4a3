import Nat "mo:base/Nat";

import Time "mo:base/Time";
import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
  type Reservation = {
    name: Text;
    date: Time.Time;
    guests: Nat;
  };

  stable var reservations: [Reservation] = [];

  public func addReservation(name: Text, date: Time.Time, guests: Nat) : async () {
    let newReservation: Reservation = {
      name = name;
      date = date;
      guests = guests;
    };
    reservations := Array.append(reservations, [newReservation]);
  };

  public query func getReservations() : async [Reservation] {
    reservations
  };
}
