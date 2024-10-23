import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Reservation {
  'date' : Time,
  'name' : string,
  'guests' : bigint,
}
export type Time = bigint;
export interface _SERVICE {
  'addReservation' : ActorMethod<[string, Time, bigint], undefined>,
  'getReservations' : ActorMethod<[], Array<Reservation>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
