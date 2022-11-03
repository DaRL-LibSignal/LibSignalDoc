# Customize Traffic Flow File

Then, we should create **Traffic Flow File**. It defines the traffic flow and stores the vehicles' information. 
Here, we introduce how to create a **Traffic Flow File** named `NewFlow` in CityFlow and SUMO.

## CityFlow

CityFlow's traffic flow defines vehicles' basic information, routes, depart time and others.

For example, you can define `NewFlow.json` like this(Details can be found in [CityFlow.TrafficFlowFile](https://cityflow.readthedocs.io/en/latest/flow.html)):
```
[
    {
    // vehicles' basic information    
    "vehicle": {
      "length": 5.0,
      "width": 2.0,
      "maxPosAcc": 2.0,
      "maxNegAcc": 4.5,
      "usualPosAcc": 2.0,
      "usualNegAcc": 4.5,
      "minGap": 2.5,
      "maxSpeed": 11.11,
      "headwayTime": 2.0
    },
    // vehicle's routes
    "route": [
      "road_0_1_0",
      "road_1_1_0"
    ],
    // interval of consecutive vehicles
    "interval": 5,
    // start time of generating the vehicle 
    "startTime": 0,
    // end time of generating the vehicle 
    "endTime": 0
  }
]
```

## SUMO

SUMO's traffic flow defines different types of vehicles' basic information, routes and depart time.

For example, you can define `NewFlow.rou.xml` like this(Details can be found in [SUMO.TrafficFlowFile](https://sumo.dlr.de/docs/Definition_of_Vehicles%2C_Vehicle_Types%2C_and_Routes.html)):

```
<?xml version="1.0" encoding="UTF-8"?>

<routes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sumo.dlr.de/xsd/routes_file.xsd">
    <!--a type of vehicles' basic information-->
    <vType id="pkw" length="4.30" minGap="1.50" speedFactor="normc(1.00,0.10,0.20,2.00)" vClass="passenger"/>
    <!--vehicle's id, type and depart time-->
    <vehicle id="124779_406_0" type="pkw" depart="25205.00">
        <!--vehicle's routes-->
        <route edges="28198821#3 32038051#0"/>
    </vehicle>
    <vehicle id="151372_418_0" type="pkw" depart="25207.00">
        <route edges="130165204 27115123#3 32038051#0"/>
    </vehicle>
</routes>
```