import { Attribute, SafetyRating, Lock } from "./Attribute";

export interface SeriesAttributeList {
    thickness: Attribute;
    sound_absorption: Attribute;
    safety_rating: SafetyRating;
    locking_points: Attribute;
    guarantee: Attribute;
    lock: Lock
};