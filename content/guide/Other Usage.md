# Other Usage

## Task and Trainer

### Task

**BaseTask** class is an abstract class, which is designed to improve ***LibSignal***’s extensibility and make it suitable for different tasks. Currently, ***LibSignal*** only implements traffic signal tasks, creating **TSCTask** class to support it. It is required to override the *run* method in the subclass of **BaseTask**, otherwise, it will display `NotImplementedError` message.

#### TSCTask

For traffic signal control tasks, ***LibSingal*** provides **TSCTask** class to manage the entire process. Users only need to call the *run* function to complete the task, including the train and test process.

### Trainer

**BaseTrainer** decouples the different stages of a task which includes initializing parameters, setting random seeds for experiments to ensure the reproducibility of experiments, setting logger, and creating **World**, **Agents**, **Metrics** and **Environment** needed to train the models. Currently, ***LibSignal*** supports **TSCTrainer** class which inherits **BaseTrainer** class to train and test models under traffic signal control tasks.

#### TSCTrainer

**TSCTrainer** contains all the processes necessary for the traffic signal control task, including initialization and preprocessing, training and testing models.  Meanwhile, the running information will also be recorded by calling *writeLog* function. 

In process of initialization and preprocessing, **World**, **Agents**, **Metrics** and **Environment** will be created by calling *create_world*, *create_agents*, *create_metrics* and *create_env* functions. Then, models stored in the **Agent** class will be trained and tested by calling *train* and *test* functions. **Metrics** class is used for estimating model performance when training and testing the models. For details, see [World](), [Agents](), [Metrics]() and [Environment]().

## Environment

***LibSignal*** provides **Environment** class to help agents interact with the simulator. It inherits from the abstract class **gym.Env**. In the **Environment**, it provides `step` and `reset` functions to help the agent and simulator work synchronously. Users can also get information about observations, rewards, whether the process is done and others information users want to obtain. 
For details about `step` and `reset`, you can see [API REFERENCE.Environment]() and [Gym Documentation](https://www.gymlibrary.dev/api/core/).


