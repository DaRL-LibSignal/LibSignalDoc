# Install
## Hands on Experience👉[Colab](https://colab.research.google.com/drive/1FrMTRsbSkZGAeN-Mh4PqWMI-SrDM3J7w?usp=share_link)
## Install on your device with Source Code

LibSingal provides installation from source code.
Please execute the following command to install and configure  our environment.   
**First, despite any OS**(Linux, Windows, MacOS, etc), you need to **get our source code**:
```---
mkdir DaRL
cd DaRL
git clone --branch doc_ver https://github.com/DaRL-LibSignal/LibSignal.git
cd LibSignal
```
Use anaconda to manage your environment and package, 
If you don't have one, see [here](https://www.anaconda.com/products/distribution)
Then please find your corresponding platform and follow instructions below:

### On MacOS
create your own conda environment:
```angular2html
conda create -n testlibsignal python=3.7
conda activate testlibsignal
```
Open the command line and Install the required env info:
```angular2html
pip install -r requirements.txt
```
```angular2html
pip install cmake
```
Install the [pytorch](https://pytorch.org/get-started/locally/) that suits your machine, or simplest way:  
```angular2html
pip install torch
```

If you encounter problem like: 'EntryPoints' object has no attribute 'get', please do follow:
```angular2html
pip install importlib-metadata==4.13.0
pip install pfrl
```
Then when you conduct 
```angular2html
python run.py
```
You are expected to see '**ModuleNotFoundError: No module named 'cityflow**', that's what we are doing next:  
Install **cityflow** follow the instructions [here](https://cityflow.readthedocs.io/en/latest/install.html) or simplest way:
```angular2html
git clone https://github.com/cityflow-project/CityFlow.git
cd CityFlow
pip install .
```
Then go one step back to the root folder of Libsignal where stores "run.py" and run again by
```angular2html
cd ..
python run.py
```
you can also run the file in your IDE!
Congrats，your first attempt is successful! 🎉🎉🎉

### On Linux
Install **cityflow** follow the instructions [here](https://cityflow.readthedocs.io/en/latest/install.html):

Install **sumo** follow the instructions [here](https://sumo.dlr.de/docs/Downloads.php):   


Stay at the root folder of cloned repository, and then  
Open the command line and Install the required env info:
```angular2html
pip install -r requirements.txt
```
```angular2html
pip install cmake
```
If you found something missing, eg: lmdb, install as follow:
```angular2html
pip install lmdb
```
One Click from run.py with default configurations:
As an example, we set DQN with cityflow as default
detailed config settings can be found at [Document](https://darl-libsignal.github.io/LibSignalDoc/content/getstart/Install.html)

### On Windows
You could visit the instructions [Doc](https://docs.google.com/document/d/1O8UbL3kT_bO-v-pwbijvLo7BZGOjlqA_3q-zwANGXqw/edit?usp=sharing) for detailed steps and error solutions.
Please use WSL or Docker first:  
install [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)  

install [Docker](https://docs.docker.com/desktop/install/windows-install/)

Install **cityflow** follow the instructions [here](https://cityflow.readthedocs.io/en/latest/install.html)  

Install **sumo** follow the instructions [here](https://sumo.dlr.de/docs/Downloads.php)    


Stay at the root folder of cloned repository, and then  
Open the command line and Install the required env info:
```angular2html
pip install -r requirements.txt
```
```angular2html
pip install cmake
```
If you found something missing, eg: lmdb, install as follow:
```angular2html
pip install lmdb
```
One Click from run.py with default configurations:
As an example, we set DQN with cityflow as default
detailed config settings can be found at [Document](https://darl-libsignal.github.io/LibSignalDoc/content/getstart/Install.html)



## Simulator environment configuration
<br />
Though CityFlow and SUMO are stable under Windows and Linux systems, we still recommend users work under the Linux system. Currently, CBEngine is stable under the Linux system.<br><br>

### CityFlow Environment
<br />

To install CityFlow simulator, please follow the instruction on [CityFlow Doc](https://cityflow.readthedocs.io/en/latest/install.html#)


```
sudo apt update && sudo apt install -y build-essential cmake

git clone https://github.com/cityflow-project/CityFlow.git
cd CityFlow
pip install .
```
To test configuration:
```
import cityflow
env = cityflow.Engine
```
<br>

### SUMO Environment
<br />

To install SUMO environment, please follow the instruction on [SUMO Doc](https://epics-sumo.sourceforge.io/sumo-install.html#)

```
sudo apt-get install cmake python g++ libxerces-c-dev libfox-1.6-dev libgdal-dev libproj-dev libgl2ps-dev swig

git clone --recursive https://github.com/eclipse/sumo

export SUMO_HOME="$PWD/sumo"
mkdir sumo/build/cmake-build && cd sumo/build/cmake-build
cmake ../..
make -j$(nproc)
```
To test installation:
```
cd ~/DaRL/sumo/bin
./sumo
```

To add SUMO and traci model into system PATH, execute code below:
```
export SUMO_HOME=~/DaRL/sumo
export PYTHONPATH="$SUMO_HOME/tools:$PYTHONPATH"
```
To test configuration:
```
import libsumo
import traci
```
<br>

### CBEngine
<br />

CBEngine currently works stably under the Linux system; we highly recommend users choose Linux if we plan to conduct experiments under the CBEinge simulation environment. (Currently not available)

<br>


## Requirment
<br />

Our code is based on Python version 3.9 and Pytorch version 1.11.0. For example, if your CUDA version is 11.3 you can follow the instruction on [PyTorch](https://pytorch.org/get-started/locally/)

```
pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu113

pip install -r requirements.txt
```

## Selective agents
<br />

We also support agents implemented based on other libraries
```
# Colight Geometric implementation based on default environment mentioned in Requirment

pip install torch-scatter torch-sparse torch-cluster torch-spline-conv torch-geometric -f https://data.pyg.org/whl/torch-1.11.0+cu113.html

# ppo_pfrl implementation
pip install pfrl
```
Detailed instrcuctions can be found on page [Pytorch_geometric](https://pytorch-geometric.readthedocs.io/en/latest/notes/installation.html) and [PFRL](https://pfrl.readthedocs.io/en/latest/install.html). After installation, user should uncomment code in PATH ./agent/\_\_init\_\_.py 
```
# from .ppo_pfrl import IPPO_pfrl
# from colight import CoLightAgent
```

## selective simulation environment
If users only need some specific simulation environments, please comment on the respective codes following the instructions below.

![uncommon_world](/_static/world_uncomment.png)

![uncommon_generator1](/_static/generator_uncomment1.png)

![uncommon_generator2](/_static/generator_uncomment2.png)

Now, you can use LibSignal;for more details, please refer to Quick Start.
