# Agents

Agents is a list of **Agent** class objects. **Agent** class is the controller of traffic signals at single or multiple intersections. It can provide information of observation, phase, reward or others with `get_ob`, `get_phase`, `get_reward`. And it can also give lane level metric through `get_queue`, `get_delay`. The **Agent** class also gives action back to the simulator through `get_action`. 
Currently, ***LibSignal*** supports **Non-RL based Agent**, **RL based Agent**, **Agent imported from other lib** and **Agent that users customized**.

## BaseAgent

**BaseAgent** class is used for creating a base agent and base methods. All the **Agent** classes must inherit **BaseAgent** class and override `get_ob`, `get_reward`, `get_action` and `get_action_prob` methods.

## RLAgent

**RLAgent** class is used for creating an RL-based agent. It would create **Generator**s of observation, phase, reward, queue and delay. It must recreate **Generator** in `__init__` and `reset` methods if an RL-based agent has different settings for observation, phase, reward, queue and delay.

### Default Generator Settings

- **Observation**: the default observation generator of an agent is `lane_count`, defined as the number of running vehicles on each lane. 

- **Phase**: the default phase generator of an agent is `phase`, defined as the current phase of the intersection. 

- **Reward**: the default reward generator of an agent is `lane_waiting_count`, defined as the number of waiting vehicles(speed less than 0.1m/s) on each lane. 

- **Queue**: the default queue generator of an agent is `lane_waiting_count`. 

- **Delay**: the default delay generator of an agent is `lane_delay`, defined as the average difference between the current speed of the vehicle and the maximum speed limit of this lane over all vehicles.

## Imported Agent and Customized Agent

For **Imported Agent** and **Customized Agent**, details can be found in [Customize Agent](../Tutorial/Customize%20Agent.md).