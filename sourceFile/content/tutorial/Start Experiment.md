# Start Experiment

This is a tutorial to help users quickly start their experiments. Before start learning how to start the experiment, we recommend our users first see the [I](https://www.notion.so/getstart/Introduction.md)ntroduction and Start.

The skeleton structure of LibSignal is shown below:

```
Libsignal/
    README.md
    requirements.txt
    environment.py
    run.py
    data/
        raw_data/example_datasets
        output_data/output_experiment_data
    configs/
        sim/simulator_configs.cfg
        tsc/task_param_configs.yml
    agent/{baseline}_agent.py
    world/world_{simulator}.py
    generator/{lane}_generator.py
    trainer/{tsc}_trainer.py
```

- To run a traffic signal control experiment, a sim_configs.cfg and a param_configs.yml file must be provided first. The two files are stored under path **`\configs\sim\\`** and **`\configs\tsc\\`.**
    - The sim_configs.cfg contains information to initialize the corresponding simulator engine, and road network and traffic flow information could be tracked through it.
    - The param_configs.cfg contains information of model parameters, logger path, trainer parameters(training epoch, simulation time steps, etc.), world settings(save replay files or not, gui, etc).
- Simulation type: Since LibSignal supports different simulators, the user should assign the simulator type before starting experiments. Our experiment workflow is highly uniform, so the configuration files will automatically adapt to the different simulators and need no extra effort to modify them.
- Agent type: LibSignal provides different baseline models in traffic signal control tasks and users could also customize their own models for their own experiments. Also, models should be implemented within **agent** class under path **`\agent\\`**.

## Run Experiment with Default Setting

To start our default experiment setting, run

```
python run.py
```

Then the default experiment setting will be automatically initiated, and the experiment will thereafter start. 

## Changing Experiment Parameters

To change the experiment setting, we provide the following parameters:

- **a: type of agent.** Users could change this parameter to other baseline methods or their own methods after registering it in the **Register** class
- **w: type of simulator.** Users could choose a specific simulator engine and run experiments in this environment. Currently, we support *CityFlow* and *SUMO* simulators.
- **n: network name.** Users could choose the network to instantiate in the **World** class. The network name should be contained in the **`\configs\sim\\`** path. If our users want to use their own dataset, They should provide new .cfg files in the same directory and change this parameter to the same world. Before that, they should also place *roadnetFile* and *flowFile* at the position described in the config file.

The logger module will output the running information and record it in  the `data\output_data\tsc\{simulator}_{agent}\{simulator}_{dataset_name}\0\logger\{start_time}.log`.