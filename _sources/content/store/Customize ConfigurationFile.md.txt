# Customize Configuration File

**Configuration File** defines the parameters and file path. It is stored in `LibSignal/configs/sim/` folder. Different simulators and datasets require different files.

Here, we introduce how to create a **Configuration File** for a new dataset, named `NewNetwork`, that its **Road Network File**s are `NewRoadNet.json` and `NewRoadNet.net.xml` in CityFlow and SUMO, and **Traffic Flow File**s are `NewFlow.json` and `NewFlow.rou.xml` in CityFlow and SUMO respectively.

## CityFlow

For example, you can define `cityflow_NewNetwork.cfg` like this:

```
{
  "network": "NewNetwork",
  "interval": 1.0,
  "seed": 0,
  "dir": "data/",
  "roadnetFile": "raw_data/NewNetwork/NewRoadNet.json",
  "flowFile": "raw_data/NewNetwork/NewFlow.json",
  "rlTrafficLight": true,
  "saveReplay": false,
  "roadnetLogFile": "output_data/tsc/NewNetwork_ModelName/NewNetwork/0/replay/RunningTime.json",
  "replayLogFile": "output_data/tsc/NewNetwork_ModelName/NewNetwork/0/replay/RunningTime.txt"
}
```

## SUMO

Users should create `.sumocfg` file that contains parameters for a traffic simulation before creating `.cfg` file. All `.sumocfg` files are stored in the corresponding dataset folder under `LibSingal/data/raw_data/` folder, for example, `NewNetwork.sumocfg` is stored in `LibSingal/data/raw_data/NewNetwork/` folder.

First, you can define `NewNetwork.sumocfg` like this:

```
<configuration>
  <input>
    <net-file value="NewRoadNet.net.xml"/>
	<route-files value="NewFlow.rou.xml"/>
  </input>
  <time>
    <begin value="0"/>
    <end value="3600"/>
  </time>
  <processing>
		<time-to-teleport value="-1"/>
	</processing>
</configuration>
```

Then, you can define `sumo_NewNetwork.cfg` like this:

```
{
  "network": "NewNetwork",
  "interval": 1.0,
  "seed": 0,
  "dir": "data/",
  "combined_file": "raw_data/NewNetwork/NewNetwork.sumocfg",
  "roadnetFile": "raw_data/NewNetwork/NewRoadNet.net.xml",
  "flowFile": "raw_data/NewNetwork/NewFlow.rou.xml",
  "convertroadnetFile": "raw_data/NewNetwork/ConvertedRoadNet.json",
  "convertflowFile": "raw_data/NewNetwork/ConvertedFlow.json",
  "no_warning": true,
  "name": "debug",
  "yellow_length": 5,
  "gui": false
}
```

Now that you have learned how to add a new **Dataset**, try the following commands to use this dataset!

```
python run.py -n newnetwork
```