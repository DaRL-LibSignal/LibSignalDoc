# Customize Agent

This documentation overviews how to create a new agent, including importing an agent from other libs.

## Create a New Agent Class

To begin with, we should create a new model implemented from **RLAgent** for RL-based agents or **BaseAgent** for other types of agents.

Here we take the RL-based agent as an example. We would like to develop a new model, named `NewModel`, for traffic signal control tasks.

First please create a new file `newmodel.py` in the directory `LibSignal/agent/` and write the following code into the file.

```
from . import RLAgent
from common.registry import Registry

@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def __init__(self, world, rank):
        pass
    
    def reset(self):
        pass
    
    def __repr__(self):
        pass
        
    def get_ob(self):
        pass
    
    def get_reward(self):
        pass
        
    def get_phase(self):
        pass
        
    def get_queue(self):
        pass
        
    def get_delay(self):
        pass
        
    def get_action(self):
        pass
        
    def sample(self):
        pass
        
    def remember(self):
        pass
        
    def build_model(self):
        pass
        
    def update_target_network(self):
        pass
        
    def train(self):
        pass
        
    def load_model(self):
        pass
        
    def save_model(self):
        pass

class NewModelNet():
    def __init__(self, **kwargs):
        pass
    
    def forward(self, x):
        pass
```

You can see that we use `Registry` to register the new model, define the `NewModelNet` class, and list the methods that must appear in the class.
In the following sections, we take the configuration of DQN model as an example.

## Implement \_\_init\_\_()

Then we implement `__init__()` method, which is used to define the model structure according to the parameters of input and configuration information from `Registry`.

The input parameters of `__init__()` are `world` and this intersection's `rank`. The configuration information from `Registry` contains various model parameters, input parameters required by creating generators and so on.

You can define `__init__()` like this:

```

@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def __init__(self, world, rank):
        # section 1: get configs
        self.world = world
        self.rank = rank
        self.sub_agents = len(self.world.intersections)
        self.inter_id = self.world.intersection_ids[self.rank]
        self.inter = self.world.id2intersection[self.inter_id]

        self.phase = Registry.mapping['model_mapping']['setting'].param['phase']
        self.one_hot = Registry.mapping['model_mapping']['setting'].param['one_hot']
        self.gamma = Registry.mapping['model_mapping']['setting'].param['gamma']
        self.grad_clip = Registry.mapping['model_mapping']['setting'].param['grad_clip']
        self.epsilon = Registry.mapping['model_mapping']['setting'].param['epsilon']
        self.epsilon_decay = Registry.mapping['model_mapping']['setting'].param['epsilon_decay']
        self.epsilon_min = Registry.mapping['model_mapping']['setting'].param['epsilon_min']
        self.learning_rate = Registry.mapping['model_mapping']['setting'].param['learning_rate']
        self.vehicle_max = Registry.mapping['model_mapping']['setting'].param['vehicle_max']
        self.batch_size = Registry.mapping['model_mapping']['setting'].param['batch_size']

        # section 2: create generators for each Agent
        self.ob_generator = LaneVehicleGenerator(self.world,  self.inter, ['lane_count'], in_only=True, average=None)
        self.phase_generator = IntersectionPhaseGenerator(world,  self.inter, ["phase"],
                                                          targets=["cur_phase"], negative=False)
        self.reward_generator = LaneVehicleGenerator(self.world,  self.inter, ["lane_waiting_count"],
                                                     in_only=True, average='all', negative=True)

        # section 3: set action space and ob_length
        self.action_space = gym.spaces.Discrete(len(self.inter.phases))
        if self.phase:
            if self.one_hot:
                self.ob_length = self.ob_generator.ob_length + len(self.inter.phases)
            else:
                self.ob_length = self.ob_generator.ob_length + 1
        else:
            self.ob_length = self.ob_generator.ob_length

        # section 4: create model, target model and others
        self.model = self._build_model()
        self.target_model = self._build_model()
        self.update_target_network()
        self.criterion = nn.MSELoss(reduction='mean')
        self.optimizer = optim.RMSprop(self.model.parameters(),
                                       lr=self.learning_rate,
                                       alpha=0.9, centered=False, eps=1e-7)
```

You can see that in the section 1 of the code, we take the necessary parameters from `Registry` and input parameters.

In the section 2 of the code, we create observation, reward and phase generators for the model. Notes that different models have different input parameters of generators. Since the definitions of queue and delay are unified, queue and delay generators are directly created in the **RLAgent**.

In the section 3 of the code, we set action space list and observation length.

In the section 4 of the code, we create model, target model and others, including a criterion and an optimizer.

.. Note::
For Multi-Agent that shares information among agents, the code for creating generators is as follows:

```
# get generators for Agent
observation_generators = []
for inter in self.world.intersections:
    node_id = inter.id
    node_idx = self.world.id2idx[node_id]
    node_obj = self.world.id2intersection[node_id]
    tmp_generator = LaneVehicleGenerator(self.world, node_obj, ['lane_count'], in_only=True, average=None)
    observation_generators.append((node_idx, tmp_generator))
sorted(observation_generators, key=lambda x: x[0])  # now generator's order is according to its index in graph
self.ob_generator = observation_generators

#  get reward generator
rewarding_generators = []
for inter in self.world.intersections:
    node_id = inter.id
    node_idx = self.world.id2idx[node_id]
    node_obj = self.world.id2intersection[node_id]
    tmp_generator = LaneVehicleGenerator(self.world, node_obj, ["lane_waiting_count"],
                                            in_only=True, average='all', negative=True)
    rewarding_generators.append((node_idx, tmp_generator))
sorted(rewarding_generators, key=lambda x: x[0])  # now generator's order is according to its index in graph
self.reward_generator = rewarding_generators

#  get phase generator
phasing_generators = []
for inter in self.world.intersections:
    node_id = inter.id
    node_idx = self.world.id2idx[node_id]
    node_obj = self.world.id2intersection[node_id]
    tmp_generator = IntersectionPhaseGenerator(self.world, node_obj, ['phase'],
                                                targets=['cur_phase'], negative=False)
    phasing_generators.append((node_idx, tmp_generator))
sorted(phasing_generators, key=lambda x: x[0])  # now generator's order is according to its index in graph
self.phase_generator = phasing_generators

#  get queue generator
queues = []
for inter in self.world.intersections:
    node_id = inter.id
    node_idx = self.world.id2idx[node_id]
    node_obj = self.world.id2intersection[node_id]
    tmp_generator = LaneVehicleGenerator(self.world, node_obj, ["lane_waiting_count"], 
                                            in_only=True, negative=False)
    queues.append((node_idx, tmp_generator))
sorted(queues, key=lambda x: x[0])
self.queue = queues

#  get delay generator
delays = []
for inter in self.world.intersections:
    node_id = inter.id
    node_idx = self.world.id2idx[node_id]
    node_obj = self.world.id2intersection[node_id]
    tmp_generator = LaneVehicleGenerator(self.world, node_obj, ["lane_delay"], 
                                            in_only=True, average="all", negative=False)
    delays.append((node_idx, tmp_generator))
sorted(delays, key=lambda x: x[0])
self.delay = delays
```


## Implement reset()

Then we implement `reset()` method, `reset()` is used to reset information, including ob_generator, phase_generator, reward_generator, queue, delay, etc.
For example, you can define `reset()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def reset(self):
        inter_id = self.world.intersection_ids[self.rank]
        inter_obj = self.world.id2intersection[inter_id]
        self.ob_generator = LaneVehicleGenerator(self.world, inter_obj, ['lane_count'], in_only=True, average=None)
        self.phase_generator = IntersectionPhaseGenerator(self.world, inter_obj, ["phase"],
                                                          targets=["cur_phase"], negative=False)
        self.reward_generator = LaneVehicleGenerator(self.world, inter_obj, ["lane_waiting_count"],
                                                     in_only=True, average='all', negative=True)
        self.queue = LaneVehicleGenerator(self.world, inter_obj,
                                                     ["lane_waiting_count"], in_only=True,
                                                     negative=False)
        self.delay = LaneVehicleGenerator(self.world, inter_obj,
                                                     ["lane_delay"], in_only=True, average="all",
                                                     negative=False)     
```

Note: The above codes are applied for Single-Agent. For Multi-Agent generators, the user must reset by the way of traversing the list.

## Implement build_model()

Then we implement `build_model()` method, `build_model()` is used to create a model(network). This method will be called by `__init__()` twice for creating the model and target model.
For example, you can define `build_model()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def build_model(self):
        model = NewModelNet(self.ob_length, self.action_space.n)
        return model     
```

## Implement NewModelNet

Then we implement `NewModelNet` class, which is the core of the model. `NewModelNet` class can inherit both the base `nn.Module` class and classes already implemented in other libs.

For example, you can define `NewModelNet` like this:
```
class NewModelNet(nn.Module):
    def __init__(self):
        super(NewModelNet, self).__init__()
        pass

    def _forward(self, x):
        pass
```

## Implement \_\_repr\_\_()

Then we implement `repr()` method, `repr()` is used to return the `self.model` structure.
For example, you can define `__repr__()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def __repr__(self):
        return self.model.__repr__()   
```

## Implement get_ob()

Then we implement `get_ob()` method, `get_ob()` is used to get observation from environment.
For Single-Agent, you can define `get_ob()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def get_ob(self):
        x_obs = []
        x_obs.append(self.ob_generator.generate())
        x_obs = np.array(x_obs, dtype=np.float32)
        return x_obs  
```

For Multi-Agent, you can define `get_ob()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def get_ob(self):
        # sub_agents * lane_nums,
        x_obs = []  
        for i in range(len(self.ob_generator)):
            x_obs.append(self.ob_generator[i][1].generate())
        length = set([len(i) for i in x_obs])
        if len(length) == 1:
            x_obs = np.array(x_obs, dtype=np.float32)
        else:
            x_obs = [np.expand_dims(x,axis=0) for x in x_obs]
        return x_obs
```

## Implement get_reward()

Then we implement `get_reward()` method, `get_reward()` is used to get reward from environment.
For Single-Agent, you can define `get_reward()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def get_reward(self):
        rewards = []
        rewards.append(self.reward_generator.generate())
        rewards = np.squeeze(np.array(rewards))
        return rewards    
```

For Multi-Agent, you can define `get_reward()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def get_reward(self):
        rewards = []  # sub_agents
        for i in range(len(self.reward_generator)):
            rewards.append(self.reward_generator[i][1].generate())
        rewards = np.squeeze(np.array(rewards))
        return rewards
```

## Implement get_phase()

Then we implement `get_phase()` method, `get_phase()` is used to get current phase of intersection(s) from environment.
For Single-Agent, you can define `get_phase()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def get_phase(self):
        phase = []
        phase.append(self.phase_generator.generate())
        phase = (np.concatenate(phase)).astype(np.int8)
        return phase      
```

For Multi-Agent, you can define `get_phase()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def get_phase(self):
        phase = []  # sub_agents
        for i in range(len(self.phase_generator)):
            phase.append((self.phase_generator[i][1].generate()))
        phase = (np.concatenate(phase)).astype(np.int8)
        return phase
```


## Implement get_queue()

Then we implement `get_queue()` method, `get_queue()` is used to get queue length of intersection.
For Single-Agent, you can define `get_queue()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def get_queue(self):
        queue = []
        queue.append(self.queue.generate())
        # sum of lane nums
        queue = np.sum(np.squeeze(np.array(queue)))
        return queue    
```

For Multi-Agent, you can define `get_queue()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def get_queue(self):
        queue = []
        for i in range(len(self.queue)):
            queue.append((self.queue[i][1].generate()))
        tmp_queue = np.squeeze(np.array(queue))
        queue = np.sum(tmp_queue, axis=1 if len(tmp_queue.shape)==2 else 0)
        return queue  
```

## Implement get_delay()

Then we implement `get_delay()` method, `get_delay()` is used to get delay of intersection.
For Single-Agent, you can define `get_delay()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def get_delay(self):
        delay = []
        delay.append(self.delay.generate())
        delay = np.sum(np.squeeze(np.array(delay)))
        return delay   
```

For Multi-Agent, you can define `get_delay()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def get_delay(self):
        delay = []
        for i in range(len(self.delay)):
            delay.append((self.delay[i][1].generate()))
        delay = np.squeeze(np.array(delay))
        return delay # [intersections,]       
```

## Implement get_action()

Then we implement `get_action()` method, `get_action()` is used to generate action according to features. Different models have different features, users only need to input the required parameters. 
For DQN, it requires observation and phase as a feature, so you can define `get_action()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def get_action(self, ob, phase, test=False):
        if not test:
            if np.random.rand() <= self.epsilon:
                return self.sample()
        if self.phase:
            if self.one_hot:
                feature = np.concatenate([ob, utils.idx2onehot(phase, self.action_space.n)], axis=1)
            else:
                feature = np.concatenate([ob, phase], axis=1)
        else:
            feature = ob
        observation = torch.tensor(feature, dtype=torch.float32)
        actions = self.model(observation, train=False)
        actions = actions.clone().detach().numpy()
        return np.argmax(actions, axis=1)   
```

## Implement sample()

Then we implement `sample()` method, `sample()` is used to sample action randomly.
For example, you can define `sample()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def sample(self):
        return np.random.randint(0, self.action_space.n, self.sub_agents)     
```

## Implement remember()

Then we implement `remember()` method, `remember()` is used to put current step information into the replay buffer for training the agent later.
For example, you can define `remember()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def remember(self, last_obs, last_phase, actions, actions_prob, rewards, obs, cur_phase, done, key):
        self.replay_buffer.append((key, (last_obs, last_phase, actions, rewards, obs, cur_phase)))    
```

## Implement update_target_network()

Then we implement `update_target_network()` method, `update_target_network()` is used to update params of target network.
For example, you can define `update_target_network()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def update_target_network(self):
        weights = self.model.state_dict()
        self.target_model.load_state_dict(weights) 
```

## Implement train()

Then we implement `train()` method, `train()` is used to train the agent, and optimize the action generated by agent.
For example, you can define `train()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def train(self):
        #take batch-sized samples from the replay buffer randomly 
        samples = random.sample(self.replay_buffer, self.batch_size)
        # convert samples into corresponding formats
        b_t, b_tp, rewards, actions = self._batchwise(samples)
        # put the next_feature into target model
        out = self.target_model(b_tp, train=False)
        target = rewards + self.gamma * torch.max(out, dim=1)[0]
        # put the current_feature into target model
        target_f = self.model(b_t, train=False)
        for i, action in enumerate(actions):
            target_f[i][action] = target[i]
        loss = self.criterion(self.model(b_t, train=True), target_f)
        self.optimizer.zero_grad()
        loss.backward()
        clip_grad_norm_(self.model.parameters(), self.grad_clip)
        self.optimizer.step()
        if self.epsilon > self.epsilon_min:
            self.epsilon *= self.epsilon_decay
        return loss.clone().detach().numpy() 
```

## Implement load_model()

Then we implement `load_model()` method, `load_model()` is used to load model params of an episode.
For example, you can define `load_model()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def load_model(self, e):
        model_name = os.path.join(Registry.mapping['logger_mapping']['path'].path,
                                  'model', f'{e}_{self.rank}.pt')
        self.model = self._build_model()
        self.model.load_state_dict(torch.load(model_name))
        self.target_model = self._build_model()
        self.target_model.load_state_dict(torch.load(model_name))   
```

## Implement save_model()

Then we implement `save_model()` method, `save_model()` is used to save model params of an episode.
For example, you can define `save_model()` like this:
```
@Registry.register_model('NewModel')
class NewModelAgent(RLAgent):
    def save_model(self, e):
        path = os.path.join(Registry.mapping['logger_mapping']['path'].path, 'model')
        if not os.path.exists(path):
            os.makedirs(path)
        model_name = os.path.join(path, f'{e}_{self.rank}.pt')
        torch.save(self.target_model.state_dict(), model_name)
```

.. Note::
If the customized model needs more complex methods, then you can rewrite the corresponding interface mentioned above. If the model is imported from other libs, and some methods have already been included in the library, then users can use "pass" to skip the implementation of the corresponding interface.

## Import The Model

After adding the model, you need to modify the `__init__.py` file in `LibSignal/agent/__init__.py`.

Please add code like this:
```
from .newmodel import NewModelAgent
```


## Add Model Config

Then, you need to create the `LibSignal/configs/tsc/newmodel.yml` file, which is used to set the parameters of the model, trainer, world and logger.

For example, you can add codes like the following:
```
includes:
  - configs/tsc/base.yml

model:
  name: newmodel
  train_model: True
  epsilon: 0.1
  one_hot: True
  phase: True

trainer:
  learning_start: 1000

world:
  signal_config: {
    hz1x1: {
      phase_pairs: [[2, 6], [0, 4], [3, 7], [1, 5], [6, 7], [2, 3], [4, 5], [0, 1]],
      valid_acts: null
    }
  }

logger:
    attention: True
```

Note: The filename of the config and the value must be the same as the class name of the model you added. Just like the `NewModel` above.

</br>

Now that you have learned how to add a new model, try the following commands to run this model!

```
python run.py -a newmodel
```
