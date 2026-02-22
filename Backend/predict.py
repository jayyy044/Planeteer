from ultralytics import YOLO
import sys

if len(sys.argv) != 3:
    print("Incorrect args format: predict.py {modelWeightsPath} {imageFilepath}")
    exit()


model = YOLO(sys.argv[1])

result = model(sys.argv[2])

result[0].save(filename="result.jpg")
boxes = result[0].boxes
confidences = boxes.conf
classes = boxes.cls

topIdx = confidences.argmax()

confidence = float(confidences[topIdx])
topClassID = int(classes[topIdx])
topResult = model.names[topClassID]

print(confidence)
print(topResult)



