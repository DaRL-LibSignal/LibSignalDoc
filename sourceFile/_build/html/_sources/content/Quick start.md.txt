# Start Experiment

This is a tutorial to help our users quickly start their experiments and get a grasp of how to implement the **Agent** class for their customized experiments

Before start learning how to start the experiment, we recommend our users first see the [Introduction](getstart/Introduction.md) and [Start](getstart/Start.md).

The skeleton structure of LibSignal are shown below:

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
- To run a traffic signal control experiment, a sim_configs.cfg and a param_configs.yml file must be provided first. The two files are stored under path **\configs\sim\\** and **\configs\tsc\\** 

  - The sim_configs.cfg contains information to initialize the corresponding simulator engine, and road network and traffic flow information could be tracked through it. 

  - The param_configs.cfg contains information of model parameters, logger path, trainer parameters(training epoch, simulation time steps, etc.), world settings(save replay files or not, gui, etc).

- Simulation type: Since LibSignal supports different simulators, the user should assign the simulator type before starting experiments. Our experiment workflow is highly uniform, so the configuration files will automatically adapt to the different simulators and need no extra effort to modify them.

- Agent type: LibSignal provides different baseline models in traffic signal control tasks and users could also customized there own models for their own experiments. Also models should be implemented within **agent** class under path **\agent\\**. Details will be provided in later sections.

## Run Experiment with Default Setting

To start our default experiment setting, run 
```
python run.py
```
Then the default experiment setting will be automatically initiated ,and the experiment will thereafter start. </br></br>

## Changing Experiment Parameters

To change the experiment setting, we provide the following parameters:

- **-a: type of agent** Users could change this parameter to other baseline methods or their own methods after registering it in the **Register** class
- **-w: type of simulator**  Users could choose a specific simulator engine and run experiments in this environment. Currently, we support *CityFlow* and *SUMO* simulators.
- **-n: network name**  Users could choose the network to instantiate in the **World** class. The network name should be contained in the **\configs\sim\\** path. If our users want to use their own dataset, They should provide new .cfg files in the same directory and change this parameter to the same world. Before that, they should also place *roadnetFile* and *flowFile* at the position described in the config file.

</br>

## Inside the Simulation
Our LibSignal library provides an easy-to-use interface. Users can start running their customized experiments by "one clicking" run.py script. 

### Initialization and Preprocessing
The **World**, **Agent**, **Network** parameters are major components of the experiments. Other detailed parameters should be provided through configuration file. The *\_\_init\_\_* and *config_registry* methods in **Runner** class helps pre-process all the detailed parameters and register all information into the **Registry** class through **Interface** objects. This process is carefully wrapped and only exposed to users through configuration files.

1. ***\*.cfg*** file in  **\configs\sim\\** is directly used to initialize simulation experiment. It provides path of *roadnetFile* and *flowFile*. In these two files, traffic road network structure and traffic flow will be provided. At the same time, each traffic light's phase(***action space*** in RL terminology and intersection road structure(dimension of ***state***) is also provided. 
2. ***\*.yml*** file in **\configs\tsc\\** provides all detailed parameters for agents, training process, simulation process, etc. Users could define their own .yml file ,and these new parameters will overlay parameters defaulted provided in the base.yml and be processed by **Interface** class later. 

### TscTrainer
In **TscTrainer** class, **Environment**, **Agent**s, and **World** will be constructed. 
-  LibSignal provides **environment** class. It inherits from the abstract class **gym.Env**. In the **Environment**, it provides *\_\_init\_\_* to couple **Agent**'s and simulator ,which is wrapped with **World** class. And it provides *step* and *reset* functions to help the agent and simulation work synchronously. 

- **Agent**s is a list of **Agent** class objects. **Agent** class is the controller of traffic signals at single or multiple intersections. It can provide information of observation, phase, reward information with *get_ob*, *get_phase*, *get_reward*. And it can also give lane level metric through *get_queue*, *get_delay*. The **Agent** class also gives action back to the simulator through *get_action*. In RL-based agents, ***test*** should be set to ***True*** in *get_action* while testing agents performance. To customize the user's own agent class, please refer to [How to customize your own class](#how-to-customize-your-own-class) to customize your own class)

- **world** wraps the simulator inside. And it extracts and processes information from the simulator. The processed information is then passed to **Agent** class by **Generator**. Currently, we do not provide a document to support users' own simulators.

Models stored in the **Agent** class are trained in the *train* function. Metrics will be stored in the instantiated **Metric** class. Users could change the report information in *create_metric* function. 

**All the parameters initiated in the *\_\_init\_\_* have been preprocessed and registered in the Registry. And Registered information could be set in the ***.yml*** and ***.cfg*** file which are mentioned in [Initialization and Preprocessing](#initialization-and-preprocessing)**

</br>

# Tracing the experiment outputs


# How to customize your own class