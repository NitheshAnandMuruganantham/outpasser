import cv2
import os
import numpy as np
from pygame import mixer
import pyzbar.pyzbar as pyzbar
import requests
import time
from dotenv import load_dotenv
from playsound import playsound

load_dotenv()

cap = cv2.VideoCapture(1)
font = cv2.FONT_HERSHEY_PLAIN

working_rw = {}


while True:
    _, frame = cap.read()

    decodedObjects = pyzbar.decode(frame)
    for obj in decodedObjects:
        if working_rw != obj.data:
            SplitedId = str(obj.data.decode("utf-8")).split()
            apiKey = os.getenv("API_KEY")

            playsound('./loading.mp3', True)
            r = requests.post(url=os.getenv('SERVER_URL'), headers={"x-api-key": apiKey
                                                                    }, data={"id": SplitedId[0], "key": SplitedId[1]})
            print(r.text)
            if r.text == "ok":
                playsound('./done.mp3', True)
            else:
                playsound('./invalid.mp3', True)
            working_rw = obj.data
    cv2.imshow("Frame", frame)

    key = cv2.waitKey(1)
    if key == 27:
        break
cap.release()
cv2.destroyAllWindows()
