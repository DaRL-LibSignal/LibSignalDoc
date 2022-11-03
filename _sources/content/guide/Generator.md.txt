# Generator

**Generator** class aims to provide state, reward, phase and other information to **Agent** class by interacting with **World** class. The information is divided into phase, intersection and lane levels, corresponding to **IntersectionPhaseGenerator**, **IntersectionVehicleGenerator** and **LaneVehicleGenerator**.

## BaseGenerator

**BaseGenerator** is an abstract class. It uses `generate` method to generate state or reward based on current simulation state. In `generate` method, it takes the name of the required information as parameters of input, then integrates the information, and outputs the values. Different types of generators have different methods to implement. It is required to override the `generate` method in other **Generator** classes, otherwise, it will display `NotImplementedError` message.

## IntersectionPhaseGenerator

**IntersectionPhaseGenerator** generates state or reward based on statistics of intersection phases. Currently, it supports the value of `cur_phase` to return. Details can be found in [API REFERENCE.IntersectionPhaseGenerator]().

## IntersectionVehicleGenerator

**IntersectionVehicleGenerator** generates state or reward based on statistics of intersection vehicles. Currently, it supports `vehicle_trajectory`, `lane_vehicles`, `history_vehicles` and `vehicle_distance` as parameters of input, and supports `vehicle_map`, `passed_count`, `passed_time_count`, `cur_phase` as output. Details can be found in [API REFERENCE.IntersectionVehicleGenerator]().

## LaneVehicleGenerator

**LaneVehicleGenerator** generates state or reward based on statistics of lane vehicles. Currently, it supports `lane_count`, `lane_waiting_count`, `lane_waiting_time_count`, `lane_delay` and `pressure` as parameters of input, and supports the same information as output. Details can be found in [API REFERENCE.LaneVehicleGenerator]().


