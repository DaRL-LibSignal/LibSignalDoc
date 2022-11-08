# Environment

***LibSignal*** provides **Environment** class to help agents interact with the simulator. It inherits from the abstract class **gym.Env**. In the **Environment**, it provides `step` and `reset` functions to help the agent and simulator work synchronously. Users can also get information about observations, rewards, whether the process is done and others information users want to obtain. 
For details about `step` and `reset`, you can see [API REFERENCE.Environment]() and [Gym Documentation](https://www.gymlibrary.dev/api/core/).