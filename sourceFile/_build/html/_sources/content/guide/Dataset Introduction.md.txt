# Dataset Introduction

In this section, we introduce the datasets used in ***LibSignal***, basic units called atomic files, and conversion tools.

## Datasets

For details, you can see [Reinforcement Learning for Traffic Signal Control](https://traffic-signal-control.github.io/#open-datasets) and [RESCO](https://github.com/Pi-Star-Lab/RESCO).

| Dataset name                    | Number of Intersections | Support Environment |
| :-----------------------------: | :---------------------: | :-----------------: |
| hangzhou_1x1_bc-tyc_18041610_1h | 1                       | CityFlow            |
| hangzhou_1x1_kn-hz_18041608_1h  | 1                       | CityFlow            |
| hangzhou_1x1_qc-yn_18041608_1h  | 1                       | CityFlow            |
| hangzhou_1x1_sb-sx_18041608_1h  | 1                       | CityFlow            |
| hangzhou_4x4_gudang_18010207_1h | 16                      | CityFlow            |
| manhattan_28x7                  | 196                     | CityFlow            |
| cologne1                        | 1                       | SUMO                |
| cologne3                        | 3                       | SUMO                |
| grid4x4                         | 16                      | SUMO                |

.. Note::
All the datasets’ time span is set to 3600 seconds.

## Atomic Files

To make datasets configurations adaptive across different simulators, we consider two basic units called “atomic files" that can map to the different simulation environments. 

### Road Network File

It stores the basic structure of a traffic network consisting of road, lane, and traffic light information. For [CityFlow](https://cityflow.readthedocs.io/en/latest/roadnet.html), the atomic file is in the format of `roadnet.json`, while in [SUMO](https://sumo.dlr.de/docs/Networks/SUMO_Road_Networks.html) is `.net.xml`. 

### Traffic Flow File

It defines the traffic flow and stores the vehicles' information. The format under [CityFlow](https://cityflow.readthedocs.io/en/latest/flow.html) is `flow.json`, while in [SUMO](https://sumo.dlr.de/docs/Definition_of_Vehicles%2C_Vehicle_Types%2C_and_Routes.html) is `.rou.xml`.

## Conversion Tools

We provide `converter.py` tool to convert basic atomic files between different simulators. It takes in **Road Network File** and **Traffic Flow File** from the source simulator, sometimes also needs configuration files, and generates new files in the target simulator's formation. 

- The following code converts a SUMO roadnet file, `grid4x4/grid4x4.net.xml`, and a traffic flow file, `grid4x4.rou.xml`, to CityFlow format with the information from SUMO configuration file `grid4x4/grid4x4.sumocfg`.

```
python converter.py --typ s2c --or_sumonet grid4x4/grid4x4.net.xml --cityflownet grid4x4/grid4x4_roadnet_red.json --or_sumotraffic grid4x4/grid4x4.rou.xml --cityflowtraffic grid4x4/grid4x4_flow.json --sumocfg grid4x4/grid4x4.sumocfg
```

- The following code converts a CityFlow roadnet file, `hangzhou_1x1_bc-tyc_18041610_1h/roadnet.json`, and a traffic flow file, `hangzhou_1x1_bc-tyc_18041610_1h/flow.json`, to SUMO format.

```
python converter.py --typ c2s --or_cityflownet hangzhou_1x1_bc-tyc_18041610_1h/roadnet.json --sumonet hangzhou_1x1_bc-tyc_18041610_1h/hangzhou_1x1_bc-tyc_18041610_1h.net.xml --or_cityflowtraffic hangzhou_1x1_bc-tyc_18041610_1h/flow.json --sumotraffic hangzhou_1x1_bc-tyc_18041610_1h/hangzhou_1x1_bc-tyc_18041610_1h.rou.xml
```