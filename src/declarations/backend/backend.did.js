export const idlFactory = ({ IDL }) => {
  const Time = IDL.Int;
  const Reservation = IDL.Record({
    'date' : Time,
    'name' : IDL.Text,
    'guests' : IDL.Nat,
  });
  return IDL.Service({
    'addReservation' : IDL.Func([IDL.Text, Time, IDL.Nat], [], []),
    'getReservations' : IDL.Func([], [IDL.Vec(Reservation)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
