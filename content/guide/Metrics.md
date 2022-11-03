# Metrics

We have implemented several metrics in **Metrics** class so that different agents can be compared under the same standard. For the traffic signal control task, the metrics definition is as follows:

- `Average travel time (travel time)`: The average time that each vehicle spent on traveling within the network, including waiting time and actual travel time. A smaller travel time means the better performance.

- `Queue length (queue)`: The average queue length over time, where the queue length at time $t$ is the sum of the number of vehicles waiting on lanes. A smaller queue length means the better performance.

- `Approximated delay (apx delay)`: Averaged difference between the current speed of the vehicle and the maximum speed limit of this lane over all vehicles, calculated from $1 - \frac{\sum_{i=1}^{n}v_i}{n * v_{max}}$, where $n$ is the number of vehicles on the lane, $v_i$ is the speed of vehicle $i$ and $v_{max}$ is the maximum allowed speed. A smaller delay means better performance.

- `Real delay (real delay)`: Real delay of a vehicle is defined as the time a vehicle has traveled within the environment minus the expected travel time. A smaller delay means better performance.

- `Throughput`: Number of vehicles that have finished their trips until the current simulation step. A larger throughput means better performance.