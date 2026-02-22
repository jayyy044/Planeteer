#! /bin/bash
model=yolo26s-seg.pt
epochs=30
imgsz=640

scriptDir=$(dirname -- "$(readlink -f -- "${BASH_SOURCE[0]}")")
cd "$scriptDir"

#Get Dataset
wget -O plantseg.zip "https://zenodo.org/records/17719108/files/plantseg.zip"
unzip -q plantseg.zip -d plantseg

#Start venv
source ./.venv/bin/activate

pip install -r requirements.txt

#Create Directories for label data
mkdir plantseg/labels
mkdir plantseg/labels/train
mkdir plantseg/labels/val

#Format annotations
python3 convert.py

yolo segment train data=data.yaml model=$model epochs=$epochs imgsz=$imgsz

