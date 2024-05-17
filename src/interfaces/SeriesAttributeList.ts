import { Attribute, SafetyRating, Lock, Guarantee } from "./Attribute";

export interface SeriesAttributeList {
    thickness: Attribute;
    sound_absorption: Attribute;
    safety_rating: SafetyRating;
    locking_points: Attribute;
    guarantee: Guarantee;
    lock: Lock
};