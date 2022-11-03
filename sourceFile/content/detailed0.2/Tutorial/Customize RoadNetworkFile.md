# Customize Road Network File

To begin with, we should create **Road Network File**. It stores the basic structure of a traffic network consisting of road, lane, and traffic light information. Here, we introduce how to create a **Road Network File** named "NewRoadNet" in CityFlow and SUMO. 

## CityFlow

CityFlow's **Road Network File** mainly consists of intersections and roads. 

For example, you can define `NewRoadNet.json` like this(Details can be found in [CityFlow.RoadNetworkFile](https://cityflow.readthedocs.io/en/latest/roadnet.html)):
```
{
  "intersections": [
    {
      // id of the intersection
      "id": "intersection_1_0",
      // coordinate of center of intersection
      "point": {
        "x": 0,
        "y": 0
      },
      // width of the intersection
      "width": 10,
      // roads connected to the intersection
      "roads": [
        "road_1",
        "road_2"
      ],
      // roadLinks of the intersection
      "roadLinks": [
        {
          // 'turn_left', 'turn_right', 'go_straight'
          "type": "go_straight",
          // id of starting road
          "startRoad": "road_1",
          // id of ending road
          "endRoad": "road_2",
          // lanelinks of roadlink
          "laneLinks": [
            {
              // from startRoad's startLaneIndex lane to endRoad's endLaneIndex lane
              "startLaneIndex": 0,
              "endLaneIndex": 1,
              // points along the laneLink which describe the shape of laneLink
              "points": [
                {
                  "x": -10,
                  "y": 2
                },
                {
                  "x": 10,
                  "y": -2
                }
              ]
            }
          ]
        }
      ],
      // traffic light plan of the intersection
      "trafficLight": {
        "lightphases": [
          {
            // default duration of the phase
            "time": 30,
            // available roadLinks of current phase, index is the no. of roadlinks defined above.
            "availableRoadLinks": [
              0,
              2
            ]
          }
        ]
      },
      // true if it's a peripheral intersection (if it only connects to one road, this rule is not applied in SUMO)
      "virtual": false,
      // identify the virtual intersections of SUMO, this key word appeared in the file about converting SUMO file to CityFlow file
      "gt_virtual": false
    }
  ],
  "roads": [
    {
      // id of road
      "id": "road_1",
      // id of start intersection
      "startIntersection": "intersection_1",
      // id of end intersection
      "endIntersection": "intersection_2",
      // points along the road which describe the shape of the road
      "points": [
        {
          "x": -200,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ],
      // property of each lane
      "lanes": [
        {
          "width": 4,
          "maxSpeed": 16.67
        }
      ]
    }
  ]
}
```

## SUMO

SUMO's **Road Network File** mainly consists of edges, junctions, connections and others. 

Here, we introduce how to create a simple road network named `NewRoadNet.net.xml`. Details can be found in [SUMO.RoadNetworkFile](https://sumo.dlr.de/docs/Networks/SUMO_Road_Networks.html).

```
<?xml version="1.0" encoding="UTF-8"?>
<net version="0.13" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sumo.dlr.de/xsd/net_file.xsd">

    <location netOffset="250.00,250.00" convBoundary="0.00,0.00,500.00,500.00" origBoundary="-250.00,-250.00,250.00,250.00" projParameter="!"/>
    
    <!--information about edge and its lanes-->
    <edge id=":0_0" function="internal">
        <lane id=":0_0_0" index="0" speed="36.00" length="2.58" shape="3.25,1.65 2.55,1.75 2.05,2.05 1.75,2.55 1.65,3.25"/>
    </edge>
    <edge id=":1_0" function="internal">
        <lane id=":1_0_0" index="0" speed="36.00" length="2.58" shape="1.65,496.75 1.75,497.45 2.05,497.95 2.55,498.25 3.25,498.35"/>
    </edge>
    <edge id=":2_0" function="internal">
        <lane id=":2_0_0" index="0" speed="36.00" length="2.58" shape="496.75,498.35 497.45,498.25 497.95,497.95 498.25,497.45 498.35,496.75"/>
    </edge>
    <edge id=":3_0" function="internal">
        <lane id=":3_0_0" index="0" speed="36.00" length="2.58" shape="498.35,3.25 498.25,2.55 497.95,2.05 497.45,1.75 496.75,1.65"/>
    </edge>

    <edge id="0" from="0" to="1" priority="-1">
        <lane id="0_0" index="0" speed="36.00" length="493.50" shape="1.65,3.25 1.65,496.75"/>
    </edge>
    <edge id="1" from="1" to="2" priority="-1">
        <lane id="1_0" index="0" speed="36.00" length="493.50" shape="3.25,498.35 496.75,498.35"/>
    </edge>
    <edge id="2" from="2" to="3" priority="-1">
        <lane id="2_0" index="0" speed="36.00" length="493.50" shape="498.35,496.75 498.35,3.25"/>
    </edge>
    <edge id="3" from="3" to="0" priority="-1">
        <lane id="3_0" index="0" speed="36.00" length="493.50" shape="496.75,1.65 3.25,1.65"/>
    </edge>

    <!--information about intersections-->
    <junction id="0" type="priority" x="0.00" y="0.00" incLanes="3_0" intLanes=":0_0_0" shape="0.05,3.25 3.25,3.25 3.25,0.05">
        <request index="0" response="0" foes="0" cont="0"/>
    </junction>
    <junction id="1" type="priority" x="0.00" y="500.00" incLanes="0_0" intLanes=":1_0_0" shape="3.25,499.95 3.25,496.75 0.05,496.75">
        <request index="0" response="0" foes="0" cont="0"/>
    </junction>
    <junction id="2" type="priority" x="500.00" y="500.00" incLanes="1_0" intLanes=":2_0_0" shape="499.95,496.75 496.75,496.75 496.75,499.95">
        <request index="0" response="0" foes="0" cont="0"/>
    </junction>
    <junction id="3" type="priority" x="500.00" y="0.00" incLanes="2_0" intLanes=":3_0_0" shape="496.75,3.25 499.95,3.25 496.75,0.05 496.75,3.25">
        <request index="0" response="0" foes="0" cont="0"/>
    </junction>

    <!--laneLinks of the intersection-->
    <connection from="0" to="1" fromLane="0" toLane="0" via=":1_0_0" dir="r" state="M"/>
    <connection from="1" to="2" fromLane="0" toLane="0" via=":2_0_0" dir="r" state="M"/>
    <connection from="2" to="3" fromLane="0" toLane="0" via=":3_0_0" dir="r" state="M"/>
    <connection from="3" to="0" fromLane="0" toLane="0" via=":0_0_0" dir="r" state="M"/>

    <connection from=":0_0" to="0" fromLane="0" toLane="0" dir="s" state="M"/>
    <connection from=":1_0" to="1" fromLane="0" toLane="0" dir="s" state="M"/>
    <connection from=":2_0" to="2" fromLane="0" toLane="0" dir="s" state="M"/>
    <connection from=":3_0" to="3" fromLane="0" toLane="0" dir="s" state="M"/>

</net>
```