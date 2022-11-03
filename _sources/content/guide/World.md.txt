# World

**World** class wraps the simulator inside. It can extract information directly from simulators and **Intersection** class, and integrates the information. The processed information, packaged in **info_informations**, will be passed to **Agent** class by calling **Generator** class. Currently, ***LibSignal*** supports SUMO World and CityFlow World. Users can also add new simulator world into ***LibSignal***, the details can be found in [Customize World]().

## Intersection

**Intersection**s are the basic components of the **World**. An intersection consists of different roads, and a road may contain multiple lanes. Also, the intersection can be controlled by traffic phases produced by **Agent**. All of the information is stored in variables of **Intersection** class, for example, `self.roads`, `self.lane_links` and `self.phases`, etc. 

When the **World** needs to get some information or take action, the actual executor is **Intersection**, which will call the corresponding methods. For example, when **World** calls `step` to take relative action and update information, it actually will call `step` method of each **Intersection** to execute.

## info_functions

**info_functions** retrieves information from different simulators environments and update information after each simulator stepped. It contains state information including `lane_count`, `lane_waiting_count`, `lane_waiting_time_count`, `pressure`, `phase` ,and metrics including `throughput`, `average_travel_time`, `lane_delay`, `lane_vehicles`. These info_functions will later be called by **Generator** class and pass information into **Agent**.

