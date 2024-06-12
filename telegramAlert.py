import requests
import time

isWaterLevelAlertSent = {}
isArtesianWellAlertSent = {}
headerReservatorio = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",    
    "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "srv538573.hstgr.cloud",
    "Referer": "https://srv538573.hstgr.cloud/reservatorio",   
    "Sec-Ch-Ua": "\"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": "\"Windows\"",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.159 Safari/537.36",
}

headerPoco = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",    
    "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "srv538573.hstgr.cloud",
    "Referer": "https://srv538573.hstgr.cloud/poco",   
    "Sec-Ch-Ua": "\"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": "\"Windows\"",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.159 Safari/537.36",
}

while True:
    telegramInfo = requests.get("http://localhost:5173/api/telegramAlert", headers=headerReservatorio).json()
    hydrometerRawData = requests.get("http://srv538573.hstgr.cloud:8888/api/timeseries/v0.1/smartcampusmaua/GetHydrometer", headers=headerReservatorio).json()
    for data in hydrometerRawData:        
        nodeName = f'WaterTankLavel_{str(data["tags"]["nodeName"])[-1]}'
        dataCounter = data["fields"]["data_counter"]
        if dataCounter <= int(telegramInfo["resulAlerts"]["reservatories"]):
            if not (nodeName in isWaterLevelAlertSent):
                isWaterLevelAlertSent[nodeName] = 0
            if (isWaterLevelAlertSent[nodeName] == 0):
                requests.post("https://api.telegram.org/bot7278050123:AAE9G4DteyyCvAbvt4ImqLGrKJgcudinrRQ/sendMessage", data=({"chat_id": telegramInfo["resulTelegram"]["chatID"], "text": telegramInfo["resulTelegram"]["message"] + " " + nodeName + " - " + str(dataCounter)}))
                isWaterLevelAlertSent[nodeName] = 1
        else:
            isWaterLevelAlertSent[nodeName] = 0
            requests.post("https://api.telegram.org/bot7278050123:AAE9G4DteyyCvAbvt4ImqLGrKJgcudinrRQ/sendMessage", data=({"chat_id": telegramInfo["resulTelegram"]["chatID"], "text": "A quantidade de água do equipamento " + nodeName + "voltou ao seu estado normal"}))  
    artesianWellRawData = requests.get("http://srv538573.hstgr.cloud:8888/api/timeseries/v0.1/smartcampusmaua/GetArtesianWell", headers=headerPoco).json()
    for data in artesianWellRawData:
        nodeName = data["tags"]["nodeName"]        
        dataPressure0 = data["fields"]["data_pressure_0"]
        dataPressure1 = data["fields"]["data_pressure_1"]
        if (dataPressure0 >= int(telegramInfo["resulAlerts"]["artesian_well"])):
            if not (nodeName + "_in" in isArtesianWellAlertSent):
                isArtesianWellAlertSent[nodeName + "_in"] = 0
            if (isArtesianWellAlertSent[nodeName + "_in"] == 0):
                requests.post("https://api.telegram.org/bot7278050123:AAE9G4DteyyCvAbvt4ImqLGrKJgcudinrRQ/sendMessage", data=({"chat_id": telegramInfo["resulTelegram"]["chatID"], "text": telegramInfo["resulTelegram"]["message"] + " " + nodeName + " - in: " + str(dataPressure0)}))
                isArtesianWellAlertSent[nodeName + "_in"] = 1
        else:
            isArtesianWellAlertSent[nodeName + "_in"] = 0
            requests.post("https://api.telegram.org/bot7278050123:AAE9G4DteyyCvAbvt4ImqLGrKJgcudinrRQ/sendMessage", data=({"chat_id": telegramInfo["resulTelegram"]["chatID"], "text": "A pressão de entrada do equipamento " + nodeName + "voltou ao seu estado normal"})) 
        if (dataPressure1 >= int(telegramInfo["resulAlerts"]["artesian_well"])):
            if not (nodeName + "_out" in isArtesianWellAlertSent):
                isArtesianWellAlertSent[nodeName + "_out"] = 0
            if (isArtesianWellAlertSent[nodeName + "_out"] == 0):
                requests.post("https://api.telegram.org/bot7278050123:AAE9G4DteyyCvAbvt4ImqLGrKJgcudinrRQ/sendMessage", data=({"chat_id": telegramInfo["resulTelegram"]["chatID"], "text": telegramInfo["resulTelegram"]["message"] + " " + nodeName + " - out: " + str(dataPressure1)}))
                isArtesianWellAlertSent[nodeName + "_out"] = 1
        else:
            isArtesianWellAlertSent[nodeName + "_out"] = 0
            requests.post("https://api.telegram.org/bot7278050123:AAE9G4DteyyCvAbvt4ImqLGrKJgcudinrRQ/sendMessage", data=({"chat_id": telegramInfo["resulTelegram"]["chatID"], "text": "A pressão de saída do equipamento " + nodeName + "voltou ao seu estado normal"}))  
    time.sleep(10)